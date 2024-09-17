import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage"
import Modal from "@mui/material/Modal"
import { Box, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useSpring, animated } from "@react-spring/web" // Import the necessary components

const Carousel = () => {
	const [images, setImages] = useState([])
	const [open, setOpen] = useState(false)
	const [selectedImage, setSelectedImage] = useState(null)

	const modalFade = useSpring({
		opacity: open ? 1 : 0,
		config: { duration: 300 }, // Adjust the duration as needed
	})

	// Fungsi untuk mengambil daftar gambar dari Firebase Storage
	const fetchImagesFromFirebase = async () => {
		try {
			const storage = getStorage() // Mendapatkan referensi Firebase Storage
			const storageRef = ref(storage, "GambarAman/") // Menggunakan ref dengan storage

			const imagesList = await listAll(storageRef) // Menggunakan listAll untuk mendapatkan daftar gambar

			const imageURLs = await Promise.all(
				imagesList.items.map(async (item) => {
					const url = await getDownloadURL(item) // Menggunakan getDownloadURL untuk mendapatkan URL gambar
					return url
				}),
			)

			setImages(imageURLs)
		} catch (error) {
			console.error("Error fetching images from Firebase Storage:", error)
		}
	}

	useEffect(() => {
		fetchImagesFromFirebase()
	}, [])

	const settings = {
		centerMode: true,
		centerPadding: "30px",
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "50px",
					slidesToShow: 1,
					dots: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "70px",
					slidesToShow: 1,
					dots: false,
				},
			},
		],
	}

	const handleImageClick = (imageUrl) => {
		setSelectedImage(imageUrl)
		setOpen(true)
	}

	const handleCloseModal = () => {
		setOpen(false)
		setSelectedImage(null)
	}

	// Fungsi untuk menonaktifkan klik kanan (prevent context menu)
	const disableRightClick = (e) => {
		e.preventDefault()
	}

	// Fungsi untuk menonaktifkan dragging dan long-press
	const disableDownload = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<div className="text-white opacity-60 text-base font-semibold mb-4 mx-[10%] mt-10 lg:text-center lg:text-3xl lg:mb-8" id="Galeri">
				Galeri Kelas
			</div>
			<div id="Carousel">
				<Slider {...settings}>
					{images.map((imageUrl, index) => (
						<img
							key={index}
							src={imageUrl}
							alt={`Image ${index}`}
							onClick={() => handleImageClick(imageUrl)}
							style={{ cursor: "pointer" }}
							onContextMenu={disableRightClick} // Disable klik kanan (PC)
							onDragStart={disableDownload} // Disable dragging (PC)
							onTouchStart={disableDownload} // Disable long-press (Mobile)
						/>
					))}
				</Slider>
			</div>

			<Modal
				open={open}
				onClose={handleCloseModal}
				aria-labelledby="image-modal"
				aria-describedby="image-modal-description"
				className="flex justify-center items-center">
				<animated.div
					style={{
						...modalFade,
						maxWidth: "90vw",
						maxHeight: "auto",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						position: "relative",
					}}
					className="p-2 rounded-lg">
					<IconButton
						edge="end"
						color="inherit"
						onClick={handleCloseModal}
						aria-label="close"
						sx={{
							position: "absolute",
							top: "12px",
							right: "23px",
							backgroundColor: "white",
							borderRadius: "50%",
						}}>
						<CloseIcon />
					</IconButton>
					<div className="w-full">
						<img
							src={selectedImage}
							alt="Selected Image"
							style={{ maxWidth: "100%", maxHeight: "100vh" }}
							onContextMenu={disableRightClick} // Disable klik kanan (PC)
							onDragStart={disableDownload} // Disable dragging (PC)
							onTouchStart={disableDownload} // Disable long-press (Mobile)
						/>
					</div>
				</animated.div>
			</Modal>
		</>
	)
}

export default Carousel
				
