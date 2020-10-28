<template>
	<v-container class="my-16 pb-16">
		<div class="d-flex justify-center greeting ma-4 text-h3 font-weight-regular"
		>
			Projects
		</div>
		<v-row justify="center">
			<v-col
				cols="12"
				md="8"
			>
				<TrackingCam /> 
			</v-col>
			<v-col
				cols="12"
				md="8"
			>
				<MyDashboard /> 
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import TrackingCam from '../components/Project-TrackingCam.vue'
import MyDashboard from '../components/Project-MyDashboard.vue'
export default {
	name: 'Projects',
	components: { 
		TrackingCam,
		MyDashboard,
	},
	data: () => ({
	}),
}
</script>
<style>
</style>
