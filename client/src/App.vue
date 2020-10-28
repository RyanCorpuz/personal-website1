<template>
	<v-app class="app">
		<Header />
		<transition
			name="slide-fade"
		>
			<router-view />
		</transition>		
		<Footer />
	</v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import router from './router'

export default {
	name: 'App',

	components: {
		Header,
		Footer,
	},

	data: () => ({
    //
	}),
};
router.beforeEach((to, from, next) => {
	document.title = to.meta.title + ' | Ryan Corpuz'
	next()
});
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
* {
	background-color: #F7F3E9;
	font-family: Roboto !important;
}
.slide-fade-enter-active {
	transition: all .4s ease;
	transition-delay: .1s;
}
.slide-fade-leave-active {
	transition: all;
}
.slide-fade-enter
	/* .slide-fade-leave-active below version 2.1.8 */ {
	transform: translateY(25px);
	opacity: 0;
}
.slide-fade-leave-to
	/* .slide-fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.slide-fade-leave
	/* .slide-fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
