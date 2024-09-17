const BoxGallery = () => {
	return (
	
	const disableRightClick = (e) => {
		e.preventDefault();
	};

	// Fungsi untuk menonaktifkan dragging dan long-press
	const disableDownload = (e) => {
		e.preventDefault();
	};

		<div id="BoxGallery">
			<div className="flex justify-between">
				<img 
					src="/upload.png" 
					alt="" 
					className="w-auto h-10" 
					onContextMenu={disableRightClick} // Disable klik kanan (PC)
					onDragStart={disableDownload} // Disable dragging (PC)
					onTouchStart={disableDownload} // Disable long-press (Mobile)
				/>
				<img 
					src="/next.png" 
					alt="" 
					className="h-5 w-5"
					onContextMenu={disableRightClick} // Disable klik kanan (PC)
					onDragStart={disableDownload} // Disable dragging (PC)
					onTouchStart={disableDownload} // Disable long-press (Mobile)
				/>
			</div>

			<h1 className="text-white text-xl pr-3  mt-3">Class Gallery</h1>
		</div>
	)
}

export default BoxGallery
				
