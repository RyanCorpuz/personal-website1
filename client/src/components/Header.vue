<template>
	<v-app-bar
		fixed
		outlined
		elevation=1
		height="50px"
	>
		<v-toobar-title>
			<h1>
				<span id=n1>RYAN</span>
				<span id=n2>CORPUZ</span>
			</h1>
		</v-toobar-title>
		<v-spacer></v-spacer>
		<div class="d-none d-sm-flex">
			<v-btn
				v-for="view in views"
				:key="view.name"
				:to="view.ref"
				text
				exact
				:ripple="false"
			>
				{{view.name}}
			</v-btn>
			<v-btn
				href="/RyanCorpuz_Resume.pdf"
				target="_blank"
				text
				exact
				color="#759FC7"
				:ripple="false"
				>
				Resume
			</v-btn>
		</div>
		<div class="d-flex d-sm-none">
			<v-menu transition="scroll-y-transition">
				<template v-slot:activator="{ on, attrs }">
					<v-btn
						dark
						v-bind="attrs"
						v-on="on"
						text
						exact
						:ripple="false"
						color="#759FC7"
						icon
					>
						<v-icon large>
							mdi-view-headline
						</v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-item
						v-for="view in views"
						:key="view.name"
						:to="view.ref"
					>
					{{ view.name }}
					</v-list-item>
					<v-list-item
						href="/RyanCorpuz_Resume.pdf"
					>
					Resume
					</v-list-item>
				</v-list>
			</v-menu>
		</div>
	</v-app-bar>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
		views: [
			{
				name: "Home",
				ref: "/",
			},
			{
				name: "About",
				ref: "/about",
			},
			{
				name: "Projects",
				ref: "/projects",
			},
		],
	}),
  }
</script>
<style>
h1 {
	letter-spacing: 0.1rem;
	font-size: 1.3rem !important;
}
#n1 {
	color: #49627A;
}
#n2 {
	color: #759FC7;
}
a {
	margin: 0 0.2rem;
	text-decoration: none;
	line-height: 1.5rem !important;
	font-weight: 500 !important;
	font-size: 1rem !important;
	color: #759FC7 !important;
}
.v-btn:hover {
	color: #49627A;
}
a.v-btn {
	text-transform: capitalize;
}
.v-btn--active .v-btn__content { 
	background-color: transparent;
	color: #49627A;
	padding: 0;
}
</style>
