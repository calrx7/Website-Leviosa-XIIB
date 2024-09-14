import Rating from "../components/Rating"

const Footer = () => {
	return (
		<footer class="" id="Footer">
			<div class="mx-auto w-full max-w-screen-xl px-8 py-6 lg:py-8">
				<div class="md:flex md:justify-between">
					<div class="mb-6 md:mb-0">
						<a href="#" class="flex items-center">
							<img
								src="/LogoTKJ3.png"
								alt=""
								className="h-[4.5rem] w-[4.5rem] right-2 relative rounded-full brightness-200"
							/>
							<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
						</a>
					</div>
					<div class="grid grid-cols-2 sm:grid-cols-3">
						<div className=" ">
							<h2 class="mb-4 text-sm font-semibold uppercase text-white">CREATED BY</h2>
							<ul class="text-gray-400 dark:text-gray-400 font-medium">
								<li class="mb-2">
									<a href="https://www.instagram.com/ditutinaa__/?hl=id" class="hover:underline">
										Leviosa
									</a>
								<li>
								</li>
								<a href="https://www.instagram.com/ditutinaa__/?hl=id" class="hover:underline">
										Calora
									</a>
								</li>
							</ul>
						</div>
						<div className="">
							<h2 class="mb-4 text-sm font-semibold uppercase text-white">Follow us</h2>
							<ul class="text-gray-400 dark:text-gray-400 font-medium">
							<li class="mb-1">
								
									<a href="https://www.instagram.com/ditutinaa__/?hl=id" class="hover:underline ">
										Instagram
									</a>
								</li>
									<a href="https://vm.tiktok.com/@leviosatwelfthbee" class="hover:underline">
										TikTok
									</a>
								 <li>
								<a href="https://open.spotify.com/playlist/7qE91zB9BkrpaxmnhRQ6tG?si=uUnVaMx4TPem9oTLmyaddA&pi=m8QxbIewSkak_&fbclid=PAZXh0bgNhZW0CMTEAAaarHMWjjrDzQzQOUD0Ja4Fb9WALom5DrW7doKeKKKakUSePyS_eyy2S-Ms_aem_yOZFVwW8oD5Wh-ZkyCHu1A&nd=1&utm_medium=organic&product=open&$full_url=https://open.spotify.com/playlist/7qE91zB9BkrpaxmnhRQ6tG%3Fsi%3DuUnVaMx4TPem9oTLmyaddA%26pi%3Dm8QxbIewSkak_%26fbclid%3DPAZXh0bgNhZW0CMTEAAaarHMWjjrDzQzQOUD0Ja4Fb9WALom5DrW7doKeKKKakUSePyS_eyy2S-Ms_aem_yOZFVwW8oD5Wh-ZkyCHu1A&$android_redirect_timeout=3000&feature=organic&_branch_match_id=1363097809713402844&_branch_referrer=H4sIAAAAAAAAA%2BWQ226CUBBFvwbfVLxrE9KgSLXWKvVCwwsZ4CBHzq3DIYoP/fZCk35Fk3mY7JU9O3syrVXx1O0WSmqaVh1QqsOoyLvPCmVSxtqSioiW0R%2BmJWNhiczKGosxsI2%2BW0%2BDO3/uWPJaUgwqRgtdr5Ov5az3mM/mOSq4c5F9eGP9YgzcghoDpzyJM2zvw%2BOe8Jk8vvEKkqS%2BO1YN5VPvHq3J7ZBDHtZiGsWMJjXY28FnZkaX9yzwzcX2uLRtAFxt/esVnYf38HYnx3yFoRvNfPtN8pGD/iSRG7LZbCA/Hci%2BOoSkqvqH9rYIgfCw2gXu%2BeZPpTPys3aQV4tV2bN/WwNjEcT5/2peZ4omr9e8AESCkiYhkoQiiXWoKSey1NbANM1WSkCXSCyJFxA0bn0jSQkiFZcwQnkrCFprUWi4IPAfttF0S20CAAA%3D" class="hover:underline">
										Spotify
									</a>
								</li>
							</ul>
						</div>
						<div className="hidden md:block">
							<Rating />
						</div>
					</div>

					<div className="flex items-center justify-center mt-8  md:hidden">
						{/* RATING */}
						<Rating />
					</div>
				</div>
				<hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div class="sm:flex sm:items-center sm:justify-between">
					<div class="flex mt-4 justify-center sm:mt-0">
						<p className="text-[0.7rem] text-white opacity-70">
							© {new Date().getFullYear()} LEVIOSA XII B | Di Kelola Oleh CALORA
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
