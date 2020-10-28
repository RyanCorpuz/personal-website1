<template>
	<v-container class="my-16" fill-height>
		<v-row justify="space-around">
			<v-col
				align-self="center"
				align="center"
				cols="12"
				md="4"
			>
				<div class="polaroid">
					<img class="img" src="/photo-min.jpg" />
				</div>
			</v-col>
			<v-col
				cols="12"
				md="8"
				align="left">
				<div class="greeting text-center text-h3 font-weight-regular"
				>
					Who Am I?
				</div>
				<div 
					class="maintext ma-5 text-justify text-body-1 font-weight-regular"
					v-for="item in items"
					:key="item.text"
				>
					{{ item.text }}
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import json from '../content/aboutcontent.json'
  export default {
    name: 'About',

    data: () => ({
		items: json,
    }),
  }
</script>
<style>
.img {
	max-width: 300px;
	display: block;
	margin: 0 auto;
	
}
div.polaroid {
	max-width: 300px;
	background-color: white;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	margin-bottom: 25px;
}
</style>
