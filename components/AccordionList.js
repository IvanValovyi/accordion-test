const items = [
  {
    label: "The analysis",
    isActive: false,
    height: 0,
    maxHeight: "100%",
    wasActive: false,
    ref: "1",
  },
  {
    label: "Our data",
    isActive: false,
    height: 0,
    maxHeight: "100%",
    wasActive: false,
    ref: "2",
  },
  {
    label: "Our study case",
    isActive: false,
    height: 0,
    maxHeight: "100%",
    wasActive: false,
    ref: "3",
  },
  {
    label: "Hands on analyzing",
    isActive: false,
    height: 0,
    maxHeight: "100%",
    wasActive: false,
    ref: "4",
  },
  {
    label: "Initialization",
    isActive: false,
    height: 0,
    maxHeight: "100%",
    wasActive: false,
    ref: "5",
  },
];

export default {
  data() {
    return {
      items,
    };
  },
  mounted() {
    this.items.forEach(async (el) => {
      el.height = this.$refs[el.ref][0].clientHeight;
      el.maxHeight = "0px";
    });
  },
  methods: {
    onTriggerClick: (el) => {
      el.wasActive = true;
      el.isActive = !el.isActive;

      el.isActive ? (el.maxHeight = el.height + "px") : (el.maxHeight = 0);
    },
  },
  template: `
		<div class="accordion-list">
			<div class="accordion-item" v-for="(el, i) in items" :key="i" :class="{'active': el.isActive, 'was-active': el.wasActive}">
				<div class="trigger" @click="onTriggerClick(el)">
  					<span class="label">{{el.label}}</span>

					<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
						<path d="M1 1L6 6L11 1" stroke="#0D2A54" stroke-width="2"/>
					</svg>
				</div>

  					<div class="content" :ref="el.ref" :style="{maxHeight: el.maxHeight}">
					
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum fugiat dolor voluptate quidem illo beatae nobis quasi impedit perspiciatis quas voluptates, excepturi vitae, culpa earum aliquam harum. Illum, nobis!</p>
					</div>
			</div>
		</div>
	`,
};
