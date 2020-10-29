<template>
	<v-card elevation=5 class="text-justify">
		<v-card-title class="text-h4 font-weight-bold">
			{{ this.items.title }}
			<v-spacer></v-spacer>
			<v-btn
				href="https://my-dashboard-demo.herokuapp.com/"
				target="_blank"
				text
				outlined
				:ripple="false"
				style="cursor: pointer;"
				class="text-uppercase pa-2"
				>
				DEMO
			</v-btn>
		</v-card-title>
		<v-card-subtitle>
			Utilized:
			<span 
				v-for="item in this.items.utilized"
				:key="item.item"
				class="text-body-2"
			>
				{{ item.skill }} 
			</span>
		</v-card-subtitle>
		<v-card-subtitle class="text-h5 text-uppercase font-weight-bold">
				Overview
		</v-card-subtitle>
		<v-card-text class="text-body-2">
			{{ this.items.overview}}
		</v-card-text>
		<v-btn
			block
			outlined
			text
			:ripple="false"
			@click="show = !show"
			>
			<v-icon>
			{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
			</v-icon>
			{{ show ? 'Less Details' : 'More Details' }}
			<v-icon>
			{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
			</v-icon>
		</v-btn>
		<v-expand-transition>
			<div v-show="show">
				<div class="d-flex pt-5 justify-space-around">
					<img width="85%" src="https://i.imgur.com/y6xzIPK.png" alt="" />
				</div>
				<v-card-subtitle class="text-h5 text-uppercase font-weight-bold">
					Motivation	
				</v-card-subtitle>
				<v-card-text class="text-body-2">
					{{ this.items.motivation}}
				</v-card-text>
				<v-card-subtitle class="text-h5 text-uppercase font-weight-bold">
					Implementation	
				</v-card-subtitle>
			<v-row
				v-for="(item, i) in this.items.implementation"
				:key="item.subheader"
				class="ma-1"
				justify="space-around"
			>
					<v-col
						cols=12
						lg=5
						align-self="center"
					>
						<v-card-subtitle class="text-h6">
							{{ item.subheader }}
						</v-card-subtitle>
						<v-card-text class="text-body-2">
							<div class="align-center">
							{{ item.text }}
							</div>
						</v-card-text>
					</v-col>
					<v-col cols=12
						lg=7
						align-self="center"
					>
						<div
							class="d-flex justify-center"
						>
							<img :width="item.width" :src="item.image" alt="" />
						</div>
					</v-col>
					<v-divider
						inset
						v-if="i < (items.implementation.length - 1)"
						class="mx-1"
					>
					</v-divider>
			</v-row>
				<v-card-subtitle class="text-h5 text-uppercase font-weight-bold">
					Future Work
				</v-card-subtitle>
				<v-card-text>
					<div
						v-for="(item, i) in this.items.future"
						:key="item.item"
						class="py-1 text-body-2"
						>
						{{ i+1 }}. {{ item.item}}
					</div>
				</v-card-text>
			</div>
		</v-expand-transition>
	</v-card>
</template>

<script>
import json from '../content/mydashboard.json'
export default {
    name: 'MyDashboard',
    data: () => ({
		items: json,
		show: false,
		pictures: [
			{
				src: 'https://i.imgur.com/k0HsudF.jpg',
			},
			{
				src: 'https://i.imgur.com/06eogzO.png',
			}
		],
	}),
	computer: {
		width() {
			switch(this.$vuetify.breakpoint.name) {
				case 'xs': return 220
				case 'sm': return 400
				case 'md': return 500
				case 'lg': return 800
				case 'xl': return '40%'
			}
		}
	}
}
</script>
<style scoped>
.v-btn::before, .v-btn__content { 
	background-color: transparent;
	padding: 0;
	margin: 0;
}
.v-btn:not(.v-btn--round).v-size--default {
	background-color: #F7F3E9;
	padding: 0;
	color: #6489ab;
}
.v-btn {
	position: sticky;
	top: 50px !important;
}
.v-card__text {
	color: #4A6680;
	word-wrap: normal !important;
}
.v-card__title{
	color: #4A6D78;
	word-break: normal;
}
.theme--light.v-card > .v-card__text {
	color: #4A6680;
}
.theme--light.v-card .v-card__subtitle {
	color: #6489AB;

}
div.polaroid {
	background-color: white;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	margin-bottom: 25px;
}
</style>
