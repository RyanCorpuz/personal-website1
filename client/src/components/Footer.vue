<template>
	<v-footer
		padless
		absolute
		height="auto"
	>
		<v-container fluid text-center>
			<v-btn
				v-for="link in links"
				:key="link.name"
				@click="go(link.ref)"
				:ripple="false"
				icon
				color="#6489AB"
			>
				<v-icon size="26px">
					{{ link.icon }}
				</v-icon>
			</v-btn>
			<div
				class="footertext caption font-weight-light"
			>
				© 2020 Ryan Corpuz. Made with Vue	
			</div>
		</v-container>
	</v-footer>
</template>

<script>
  export default {
    name: 'Footer',

    data: () => ({
		links: [
			{
				name: 'linkedin',
				icon: 'mdi-linkedin',
				ref: 'https://www.linkedin.com/in/ryan-corpuz1/'
			},
			{
				name: 'github',
				icon: 'mdi-github',
				ref: 'https://github.com/RyanCorpuz',
			},
		],	
	}),
	methods: {
		go(ref) {
			window.open(ref);
		},
	}
}
</script>
<style>
.footertext {
	color: #ABABAB;
}
</style>
