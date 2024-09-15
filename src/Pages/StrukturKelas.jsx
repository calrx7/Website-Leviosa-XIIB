import { useEffect, useState } from "react"
import BorderStruktur from "../components/BorderStruktur"
import AOS from "aos"
import "aos/dist/aos.css"


const StrukturKelas = () => {
	const [aosLoaded, setAosLoaded] = useState(false)

	useEffect(() => {
		if (!aosLoaded) {
			AOS.init()
			AOS.refresh()
			setAosLoaded(true)
		}
	}, [aosLoaded])

	return (
		<div className="z-1 relative h-auto lg:overflow-hidden">
			{/* wali kelas */}
			<div data-aos="fade-up" data-aos-duration="500" className="mt-14 md:mt-10">
				<BorderStruktur Jabatan="Wali Kelas" Nama="Awin J. Rahim S.Pd" Width="150px" ImgUrl="https://firebasestorage.googleapis.com/v0/b/leviosa-xii-b.appspot.com/o/Images%2Fguru.jpg?alt=media&token=3fc43c2c-7202-4439-872e-58cfa5a146c1" />
			</div>
			<div className="flex flex-col justify-center items-center">
				<img src="LineVertikal.svg" alt="" data-aos="fade-up" data-aos-duration="550" />

				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-1rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-1rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-1rem] hidden lg:flex lg:w-[4.2rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] lg:gap-[27.4rem] relative top-[-1.93rem]"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
				</div>

				<div
					className="flex gap-[10.6rem] lg:gap-[27.4rem] relative top-[-3rem]"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				{/* wakil dan ketua */}
				<div className="flex relative top-[-2.9rem]" data-aos="fade-up" data-aos-duration="1200">
					<div className="relative left-[0.1rem]">
						<BorderStruktur Jabatan="Ketua Kelas" Nama="Yung Mey Datau" Width="120px" ImgUrl="https://firebasestorage.googleapis.com/v0/b/leviosa-xii-b.appspot.com/o/Images%2Fketua.jpg?alt=media&token=9f2508f5-e3ca-4fc7-b217-211d7a35dce1" />
					</div>
					<img src="LineHorizontalPendek.svg" className="relative top-[3.6rem]" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<div className="relative right-[0.1rem]">
						<BorderStruktur Jabatan="Wakil Ketua" Nama="Jufri S. harun" Width="120px" ImgUrl="https://firebasestorage.googleapis.com/v0/b/leviosa-xii-b.appspot.com/o/Images%2Fwakilketua.jpg?alt=media&token=2d2599e5-057e-4d2f-8c93-a913066b581e" />
					</div>
				</div>

				<div data-aos="fade-up" data-aos-duration="120" className="">
					<img src="LineVertikal2.svg" alt="" className="relative top-[-3.5rem]" />
				</div>

				{/* Seketaris dan bendahara */}
				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-4.5rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>

					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-5.5rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>

					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-5.5rem] hidden lg:flex lg:w-[4.2rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] relative top-[-5.45rem] lg:gap-[27.4rem]"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
				</div>
				<div
					className="flex gap-[10.6rem] relative top-[-6.2rem] lg:gap-[27.4rem]"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				<div
					className="flex gap-[5rem] relative top-[-6.3rem] lg:gap-[22rem]"
					data-aos="fade-up"
					data-aos-duration="1200">
					<div className="flex-col">
						<BorderStruktur Jabatan="Sekertaris" Nama="Fri Anisa Olii" Width="120px" ImgUrl="https://firebasestorage.googleapis.com/v0/b/leviosa-xii-b.appspot.com/o/Images%2Fsekretaris.jpg?alt=media&token=99df1ee0-9586-4ef8-b0f0-bf2d031f0ece" />
						<div className="py-[3%]"></div>
						
					</div>

					<div className="flex-col">
						<BorderStruktur Jabatan="Bendahara" Nama="Fatma Maulana Panantu" Width="120px" ImgUrl="https://firebasestorage.googleapis.com/v0/b/leviosa-xii-b.appspot.com/o/Images%2Fbendahara.jpg?alt=media&token=78a105fb-2581-4ab2-9fb3-287deb47426d" />
						<div className="py-[3%]"></div>
						
					</div>
				</div>

				<div className="relative top-[-19.20rem]" data-aos="fade-up" data-aos-duration="900">
					<img src="LineVertikal3.svg" alt="" />
				</div>
				<div className="relative top-[-19.20rem]" data-aos="fade-up" data-aos-duration="900">
					<img src="LineVertikal3.svg" alt="" />
				</div>

				{/* Keamanan dan Kebersihan */}
				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-20.20rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-20.20rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-20.20rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-20.20rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] lg:gap-[20.20rem] relative top-[-21.1rem]"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" className="hidden lg:flex" />
				</div>
				<div
					className="flex gap-[10.6rem] relative top-[-22.0rem] lg:gap-[23.1rem]"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" className="hidden lg:flex" />
				</div>

				<div
					className=" flex gap-[5rem] relative top-[-22.5rem] lg:gap-[17.5rem]"
					data-aos="fade-up"
					data-aos-duration="1100">
					<div className="flex-col">
						<BorderStruktur Jabatan="Keamanan" Nama="Moh. Fajrin Mosii" Width="120px" ImgUrl="https://firebasestorage.googleapis.com/v0/b/leviosa-xii-b.appspot.com/o/Images%2Fkeamanan.jpg?alt=media&token=f6855d9f-5b22-4b1c-9f09-a142fa3d2a9b" />
						
						<div className="py-[3%]"></div>
						
					</div>

					<div className="flex-col">
						<BorderStruktur Jabatan="Kebersihan" Nama="Ade Irma Wati Gaib" Width="120px" ImgUrl="https://firebasestorage.googleapis.com/v0/b/leviosa-xii-b.appspot.com/o/Images%2Fkebersihan.jpg?alt=media&token=857df83a-ad78-4f65-bbe1-c6ac4412fcb1" />
						<div className="py-[3%]"></div>
						
					</div>

					<div className="flex-col hidden lg:flex">
						<BorderStruktur Jabatan="Kesehatan" Nama="Amelia Arsyad" Width="120px" ImgUrl="https://firebasestorage.googleapis.com/v0/b/leviosa-xii-b.appspot.com/o/Images%2Fkesehatan.jpg?alt=media&token=ed55fc1e-4b91-448a-90a3-971345fea89d" />
						<div className="py-[3%]"></div>
						
					</div>
				</div>

				{/* Kesehatan */}
				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem] lg:hidden"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					{/* 	<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem] hidden lg:flex lg:w-[50px]"
						data-aos="fade-up"
						data-aos-duration="600"
					/> */}

					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem] hidden lg:flex lg:hidden "
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] lg:gap-[23.1rem] relative top-[-17.85rem] lg:hidden"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
				</div>
				<div
					className="flex gap-[10.6rem] relative top-[-18.6rem] lg:gap-[23.1rem] lg:hidden"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				<div
					className=" flex gap-[5rem] relative top-[-18.9rem] lg:gap-[17.5rem] lg:hidden"
					data-aos="fade-up"
					data-aos-duration="1100">
					<div className="flex-col">
						<BorderStruktur Jabatan="Kesehatan" Nama="Siti Amelia Arsyad" Width="120px" ImgUrl="https://firebasestorage.googleapis.com/v0/b/leviosa-xii-b.appspot.com/o/Images%2Fkesehatan.jpg?alt=media&token=ed55fc1e-4b91-448a-90a3-971345fea89d" />
						
					</div>

					<div className="flex-col">
					<BorderStruktur Jabatan="Keagamaan" Nama="Siti Naysila Ente" Width="120px" ImgUrl="https://firebasestorage.googleapis.com/v0/b/leviosa-xii-b.appspot.com/o/Images%2Fkeagamaan.jpg?alt=media&token=060bfdbb-cb91-4b84-a18a-50e1488bcd4d" />
					</div>
				</div>

				{/* peralatan */}
				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] lg:gap-[35.6rem] relative top-[-17.85rem]"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
				</div>
				<div
					className="flex gap-[10.6rem] relative top-[-18.6rem] lg:gap-[35.6rem]"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				<div
					className=" flex gap-[5rem] relative top-[-18.9rem] lg:gap-[29.7rem]"
					data-aos="fade-up"
					data-aos-duration="1100">
					<div className="flex-col">
						<BorderStruktur Jabatan="Keindahan" Nama="Deyanti Pohiyalu" Width="120px" ImgUrl="https://firebasestorage.googleapis.com/v0/b/leviosa-xii-b.appspot.com/o/Images%2Fkeindahan.jpg?alt=media&token=2917e8f4-9773-43d6-aaee-f36c28a90b82" />
					</div>

					<div className="flex-col">
						<BorderStruktur Jabatan="Kerindangan" Nama="Selvina Safari" Width="120px" ImgUrl="https://firebasestorage.googleapis.com/v0/b/leviosa-xii-b.appspot.com/o/Images%2Fkerindangan.jpg?alt=media&token=fb0d6ef3-fbf5-47f4-ad66-5ae24c114828" />
					</div>
				</div>

				<div className=" absolute bottom-[8%] lg:bottom-[13%] " data-aos="fade-up" data-aos-duration="1000">
					<div className="flex justify-center items-center flex-col">
						<img src="LineVertikal3.svg" alt="" className="relative top-[6.0rem]" />
						<img src="LineVertikal2.svg" alt="" className="relative top-[6.0rem]" />
						<img src="LineVertikal2.svg" alt="" className="relative top-[6.0rem]" />
						<img src="LineVertikal3.svg" alt="" className="relative top-[6.0rem]" />
						<img src="LineVertikal3.svg" alt="" className="relative top-[6.0rem]" />
						<img src="LineVertikal3.svg" alt="" className="lg:hidden" />
						<img src="Circle.svg" alt="" className="relative top-[-0.7rem]" />
						<div className="relative bottom-3">
							<BorderStruktur Jabatan="Kekeluargaan" Nama="Aditya Utina" Width="120px" ImgUrl="https://firebasestorage.googleapis.com/v0/b/leviosa-xii-b.appspot.com/o/Images%2Fkekeluargaan.jpg?alt=media&token=0b0817e5-ea91-4062-911a-c9e1e00efa54" />
						</div>
					</div>
				</div>

				{/* Kesehatan */}
				{/* 	<div
					className=" absolute bottom-[14.5%] lg:hidden"
					data-aos="fade-up"
					data-aos-duration="1200">
					<div className="flex justify-center items-center flex-col">
						<img src="LineVertikal3.svg" alt="" className="lg:hidden" />
						<img src="Circle.svg" alt="" className="relative top-[-0.7rem]" />
						<div className="relative bottom-3">
							<BorderStruktur Jabatan="Kesehatan" Nama="Siti Amelia Arsyad" Width="120px" ImgUrl="https://firebasestorage.googleapis.com/v0/b/leviosa-xii-b.appspot.com/o/Images%2Fkesehatan.jpg?alt=media&token=ed55fc1e-4b91-448a-90a3-971345fea89d" />
							<div className="py-[3%]"></div>

						</div>
					</div>
				</div> */}
			</div>
		</div>
	)
}

export default StrukturKelas
			
