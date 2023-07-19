<script>
	const today = new Date();
</script>

<div class="flex-grow flex flex-col items-center justify-center">
	<div class="container mx-auto text-center h-full">
		<h1 class="text-7xl">Today {today.getDay() === 6 ? 'is' : 'is not'} Friday</h1>
	</div>
</div>
