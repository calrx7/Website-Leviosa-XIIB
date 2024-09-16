const BoxGallery = () => {

    const disableRightClick = (e) => {
		e.preventDefault();
	};
	const disableDownload = (e) => {
		e.preventDefault();
	};
	
	return (
		<div id="BoxGallery">
			<div className="flex justify-between">
				<img src="/upload.png" alt="" className="w-auto h-10 onDragStart={disableDownload} onTouchStart={disableDownload}" />
				<img src="/next.png" alt="" className="h-5 w-5 onDragStart={disableDownload} onTouchStart={disableDownload}" />
			</div>

			<h1 className="text-white text-xl pr-3  mt-3">Class Gallery</h1>
		</div>
	)
}

export default BoxGallery
	
