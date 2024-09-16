const BoxGallery = () => {
	return (
		<div id="BoxGallery">
			<div className="flex justify-between">
				<img src="/upload.png" alt="" className="w-auto h-10 onContextMenu={disableImageDownload} onDragStart={disableImageDownload}" />
				<img src="/next.png" alt="" className="h-5 w-5 onContextMenu={disableImageDownload} onDragStart={disableImageDownload}" />
			</div>

			<h1 className="text-white text-xl pr-3  mt-3">Class Gallery</h1>
		</div>
	)
}

export default BoxGallery
