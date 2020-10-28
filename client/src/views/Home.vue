<template>
	<v-container fill-height>
		<v-row
			justify="center"
			align-content="center"
		>
			<v-col
				cols=11
				lg=9
				align="center"
				>
				<div class="greeting ma-10 text-h2 font-weight-regular"
				>
				{{ this.greeting }}
				</div>
				<div
					class="maintext ma-5 text-body1 font-weight-regular"
					v-for="text in body"
					:key="text.message"
				>
					{{ text.message }}
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { greeting, body }from '../content/homecontent.json'
export default {
	name: 'Home',
	data: () => ({
		greeting: greeting,
		body: body,
	}),
}
</script>

<style>
.greeting {
	color:	#49627A;
}

.maintext {
	color:	#6489AB;
	letter-spacing: 0.06rem
}
</style>
