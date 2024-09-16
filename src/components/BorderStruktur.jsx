const BorderStruktur = (props) => {
	const Jabatan = props.Jabatan;
	const Nama = props.Nama;
	const Width = props.Width;
	const ImgUrl = props.ImgUrl;  // Menambahkan properti untuk URL gambar

	return (
		<div className="flex flex-col justify-center items-center"> 
			<div className="text-white text-sm mb-1">{Jabatan}</div>
			{ImgUrl && <img src={ImgUrl} alt={Nama} className="w-[80px] h-[80px] object-cover mb-2 rounded-full" />} 
			<div className={`bg-white text-black rounded-3xl text-[0.8rem] px-2 py-[0.30rem] text-center font-semibold`} style={{ width: Width }}>
				{Nama}
			</div>
		</div>
	)
}

export default BorderStruktur;
