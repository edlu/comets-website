<template>
	<div class="bg-slate-1 flex flex-col items-center relative w-full min-h-screen overflow-x-hidden">
		<!-- Navigation (hidden for now) -->
		<Navigation v-if="false" />

		<!-- Hero Video Section - Full Width -->
		<section id="home" class="h-[30rem] md:h-[41.625rem] relative w-screen overflow-hidden -ml-[calc((100vw-100%)/2)] z-10">
			<video autoPlay class="absolute inset-0 w-full h-full object-cover" controlsList="nodownload" loop playsInline muted>
				<source :src="getAssetPath('assets/hero-video.mp4')" type="video/mp4" />
			</video>
			<div class="absolute inset-0 bg-teal-9/20"></div>
		</section>

		<!-- Content Container with 12 Column Grid -->
		<div class="flex flex-col items-start w-full relative">
			<!-- Title Section - Full Width with Grid -->
			<section class="w-screen relative z-10">
				<!-- 12 Column Grid Container -->
				<div class="max-w-[90rem] mx-auto w-full h-full grid grid-cols-12 gap-[1rem] md:gap-[2rem] px-[1rem] md:px-[2rem] relative">
					<!-- Logo Overlay - Positioned absolutely within grid -->
					<div class="absolute left-[1rem] md:left-[4.375rem] top-[-8.3125rem] w-[16rem] md:w-[24.5rem] h-[16rem] md:h-[24.5rem] z-20">
						<img :src="getAssetPath('assets/comets-logo.png')" alt="Culver City Comets Logo" class="w-full h-full object-cover" />
					</div>
					
					<!-- Title Content - Starts at column 5 (span 8 columns) -->
					<div class="col-start-1 md:col-start-5 col-span-12 md:col-span-8 bg-teal-10 backdrop-blur-sm flex flex-col gap-[1rem] items-start p-[1.5rem] md:p-[2rem] pt-[8rem] md:pt-[2rem] text-white">
						<h1 class="text-h1">
							CULVER CITY YOUTH LACROSSE
						</h1>
						<h2 class="text-h3">
							COMMUNITY ATHLETICS
						</h2>
					</div>
				</div>
			</section>
			
			<!-- Decorative Background 2 (bottom) -->
			<div class="absolute left-[5rem] md:left-[24rem] top-[60rem] md:top-[126.8125rem] rotate-[135deg] pointer-events-none z-0 opacity-100 max-w-[90rem] mx-auto">
				<img :src="getAssetPath('assets/background-2.svg')" alt="" class="w-[80rem] md:w-[137.75rem] h-[25rem] md:h-[43.3125rem]" />
			</div>
			
			<!-- Main Content Grid Container -->
			<div class="max-w-[90rem] w-full relative mx-auto">

				<!-- About Section - Using 12 Column Grid -->
				<section class="grid grid-cols-12 gap-[1rem] md:gap-[2rem] p-[1rem] md:p-[2rem] w-full relative z-10">
					<!-- Content starts at column 5 (span 8 columns) -->
					<div class="col-start-1 md:col-start-5 col-span-12 md:col-span-8 flex flex-col gap-[1.5rem]">
					<div class="text-large text-teal-12">
						<p class="mb-4">
							Culver City Lacrosse is a community youth program dedicated to developing young athletes through the sport of lacrosse. We foster a culture where effort, personal growth and teamwork are our measures of success and victory not just goals and wins.
						</p>
						<p class="mb-4">
							Our program serves boys and girls from ages 4-17. With teams at various levels and skill divisions. Whether your child is new to the sport or looking to advance their skills - we have a place for them!
						</p>
						<p>
							Newcomers are always welcome to visit or participate in trial practices. Just let us know in advance.
						</p>
					</div>
						<Button variant="primary">
							Schedule a Visit
						</Button>
					</div>
				</section>

				<!-- Age Groups Section -->
				<section id="age-groups" class="flex flex-col gap-[2rem] px-[1rem] md:px-[2rem] py-[2rem] md:py-[4rem] w-full relative z-10">
				<h2 class="text-h2 text-teal-11">
					AGE GROUPS
				</h2>
				<div class="flex flex-col md:flex-row gap-[2rem] w-full">
					<!-- Little Sticks -->
					<div class="flex-1 flex flex-col gap-[2rem]">
						<div class="bg-white border-t-2 border-teal-9 h-[15rem] w-full"></div>
						<div class="flex gap-[2rem] items-center w-full">
							<div class="flex-1 flex flex-col gap-[1rem]">
								<h3 class="text-h3 text-teal-12">
									LITTLE STICKS
								</h3>
								<p class="text-large text-teal-12">
									Age 4-7
								</p>
							</div>
							<Button variant="primary">
								Register
							</Button>
						</div>
						<p class="text-medium text-teal-12">
							Introduction to lacrosse fundamentals through fun games and activities. Focus on basic skills and love of the game
						</p>
					</div>

					<!-- Youth -->
					<div class="flex-1 flex flex-col gap-[2rem]">
						<div class="bg-white border-t-2 border-teal-9 h-[15rem] w-full"></div>
						<div class="flex gap-[2rem] items-center w-full">
							<div class="flex-1 flex flex-col gap-[1rem]">
								<h3 class="text-h3 text-teal-12">
									YOUTH
								</h3>
								<p class="text-large text-teal-12">
									Age 8-12
								</p>
							</div>
							<Button variant="primary">
								Register
							</Button>
						</div>
						<p class="text-medium text-teal-12">
							Develop core skills and game understanding through practices and competitive play.
						</p>
					</div>

					<!-- Upper -->
					<div class="flex-1 flex flex-col gap-[2rem]">
						<div class="bg-white border-t-2 border-teal-9 h-[15rem] w-full"></div>
						<div class="flex gap-[2rem] items-center w-full">
							<div class="flex-1 flex flex-col gap-[1rem]">
								<h3 class="text-h3 text-teal-12">
									UPPER
								</h3>
								<p class="text-large text-teal-12">
									Age 13-17
								</p>
							</div>
							<Button variant="primary">
								Register
							</Button>
						</div>
						<p class="text-medium text-teal-12">
							Advanced training for competitive players looking to excel at the highest level of youth lacrosse.
						</p>
					</div>
					</div>
				</section>

				<!-- Seasonal Programs Section -->
				<section id="seasonal-programs" class="flex flex-col gap-[2rem] px-[1rem] md:px-[2rem] py-[2rem] md:py-[4rem] w-full relative z-10">
				<h2 class="text-h2 text-teal-11">
					SEASONAL PROGRAMS
				</h2>
				<div class="flex flex-col gap-[2rem]">
					<p class="text-medium text-teal-12">
						We're active throughout the year for all age groups. Practices take place in evenings about twice a week with regular weekend games against other regional youth teams.
					</p>
					<div class="flex flex-col sm:flex-row flex-wrap gap-[2rem] w-full">
						<!-- Spring -->
						<div class="flex-1 min-w-[15rem] flex flex-col gap-[1rem] text-teal-12">
							<h3 class="text-h4">
								SPRING
							</h3>
							<p class="text-medium-bold">
								Mar - May
							</p>
							<ul class="text-medium list-disc ml-[1.5rem]">
								<li>10 weeks</li>
								<li>Saturday games</li>
							</ul>
						</div>

						<!-- Summer -->
						<div class="flex-1 min-w-[15rem] flex flex-col gap-[1rem] text-teal-12">
							<h3 class="text-h4">
								SUMMER
							</h3>
							<p class="text-medium-bold">
								Jun - Aug
							</p>
							<ul class="text-medium list-disc ml-[1.5rem]">
								<li>Summer camp</li>
								<li>X weeks</li>
							</ul>
						</div>

						<!-- Fall -->
						<div class="flex-1 min-w-[15rem] flex flex-col gap-[1rem] text-teal-12">
							<h3 class="text-h4">
								FALL
							</h3>
							<p class="text-medium-bold">
								Sep - Nov
							</p>
							<ul class="text-medium list-disc ml-[1.5rem]">
								<li>7 weeks</li>
								<li>Box format</li>
								<li>Sunday games</li>
							</ul>
						</div>

						<!-- Winter -->
						<div class="flex-1 min-w-[15rem] flex flex-col gap-[1rem] text-teal-12">
							<h3 class="text-h4">
								WINTER
							</h3>
							<p class="text-medium-bold">
								Dec - Feb
							</p>
							<ul class="text-medium list-disc ml-[1.5rem]">
								<li>7 weeks</li>
								<li>Sixes format</li>
								<li>Saturday Games</li>
							</ul>
						</div>
						</div>
					</div>
				</section>

				<!-- Tournaments Section -->
				<section id="tournaments" class="flex flex-col gap-[2rem] px-[1rem] md:px-[2rem] py-[2rem] md:py-[4rem] w-full relative z-10">
				<h2 class="text-h2 text-teal-11">
					TOURNAMENTS
				</h2>
				<div class="flex flex-col lg:flex-row gap-[2rem] w-full">
					<div class="flex flex-col gap-[2rem] w-full lg:w-[42rem]">
						<p class="text-medium text-teal-12">
							Our competitive travel teams participate in tournaments throughout California. These teams are for dedicated players looking to compete at a higher level and represent our community.
						</p>
						<div class="flex flex-col sm:flex-row flex-wrap gap-[2rem]">
							<!-- 10U -->
							<div class="flex-1 min-w-[15rem] flex flex-col gap-[1rem] text-teal-12">
								<h3 class="text-h4">
									10U
								</h3>
								<p class="text-medium">
									Our youngest competitive team focused on fundamentals and game experience.
								</p>
							</div>

							<!-- 12U -->
							<div class="flex-1 min-w-[15rem] flex flex-col gap-[1rem] text-teal-12">
								<h3 class="text-h4">
									12U
								</h3>
								<p class="text-medium">
									Building skills and lacrosse IQ through competitive tournament play.
								</p>
							</div>

							<!-- 14U -->
							<div class="flex-1 min-w-[15rem] flex flex-col gap-[1rem] text-teal-12">
								<h3 class="text-h4">
									14U
								</h3>
								<p class="text-medium">
									Advanced training and competition. Preparing for high school play.
								</p>
							</div>

							<!-- High School -->
							<div class="flex-1 min-w-[15rem] flex flex-col gap-[1rem] text-teal-12">
								<h3 class="text-h4">
									HIGH SCHOOL
								</h3>
								<p class="text-medium">
									Elite competition with college recruitment opportunities.
								</p>
							</div>
						</div>
					</div>
						<div class="hidden lg:block flex-1 bg-white border-t-2 border-teal-9 min-h-[25rem]"></div>
					</div>
				</section>
			</div>
		</div>
		
		<!-- Free Trial Section - Full Width -->
		<section id="sign-up" class="bg-teal-5 flex flex-col gap-[2rem] items-center justify-center px-[1rem] md:px-[2rem] py-[2rem] md:py-[4rem] w-screen relative z-10">
				<h2 class="text-h3 text-teal-12">
					CONTACT US FOR A FREE TRIAL PRACTICE
				</h2>
				<p class="text-medium text-teal-12 text-center max-w-full">
					Starter equipment for trials and beginners are provided. We'll reach out and coordinate scheduling.
				</p>
				
				<!-- Form -->
				<form class="flex flex-col gap-[1rem] items-center w-full max-w-[21.0625rem]" @submit.prevent="handleSubmit">
					<div class="flex flex-col gap-[0.5rem] w-full">
						<label class="text-medium-semibold text-teal-12">
							Parent's Email
						</label>
						<input 
							type="email" 
							v-model="formData.email"
							placeholder="Enter email" 
							class="bg-teal-3 px-[1rem] py-[1rem] rounded-2xl text-teal-10 text-medium w-full outline-none focus:ring-2 focus:ring-teal-9"
						/>
					</div>

					<div class="flex flex-col gap-[0.5rem] w-full">
						<label class="text-medium-semibold text-teal-12">
							Child's Name
						</label>
						<input 
							type="text" 
							v-model="formData.childName"
							placeholder="Child's Name" 
							class="bg-teal-3 px-[1rem] py-[1rem] rounded-2xl text-teal-10 text-medium w-full outline-none focus:ring-2 focus:ring-teal-9"
						/>
					</div>

					<div class="flex flex-col gap-[0.5rem] w-full">
						<label class="text-medium-semibold text-teal-12">
							Child's Age Group
						</label>
						<select 
							v-model="formData.ageGroup"
							class="bg-teal-3 px-[1rem] py-[1rem] rounded-2xl text-teal-10 text-medium w-full outline-none focus:ring-2 focus:ring-teal-9"
						>
							<option value="">Select Age Group</option>
							<option value="4-7">Little Sticks (4-7)</option>
							<option value="8-12">Youth (8-12)</option>
							<option value="13-17">Upper (13-17)</option>
						</select>
					</div>

					<Button type="submit" variant="primary">
						Submit
					</Button>
				</form>
		</section>
		
		<!-- Decorative Background Elements -->
		<div class="absolute left-[5rem] md:-left-[5rem] top-[140rem] md:top-[30rem] rotate-[135deg] z-0 max-w-[90rem] mx-auto w-full opacity-100">
			<img :src="getAssetPath('assets/background-2.svg')" alt="" class="w-[80rem] md:w-[137.75rem] h-[25rem] md:h-[43.3125rem]" />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Navigation from '@/components/Navigation.vue'
import Button from '@/components/Button.vue'
import { getAssetPath } from '@/utils/assets'

const formData = ref({
	email: '',
	childName: '',
	ageGroup: ''
})

const handleSubmit = () => {
	console.log('Form submitted:', formData.value)
	// Add form submission logic here
	alert('Thank you! We will contact you soon.')
	formData.value = { email: '', childName: '', ageGroup: '' }
}
</script>

<style scoped>
/* Smooth scrolling for anchor links */
html {
	scroll-behavior: smooth;
}
</style>
