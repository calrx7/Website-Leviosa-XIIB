import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Senin = React.lazy(() => import("../components/Mapel/Senin"))
const Selasa = React.lazy(() => import("../components/Mapel/Selasa"))
const Rabu = React.lazy(() => import("../components/Mapel/Rabu"))
const Kamis = React.lazy(() => import("../components/Mapel/Kamis"))
const Jumat = React.lazy(() => import("../components/Mapel/Jumat"))

const Schedule = () => {
    const daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum`at", "Sabtu"]
    const currentDay = daysOfWeek[new Date().getDay()]

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    let piketGroup = []

    // Menentukan kelompok piket berdasarkan hari
    piketGroup = [
        ["Yung Mey Datau", "Deyanti Pohiyalu", "Regita Akuba", "Irma Wati Gaib", "Kirana S. Duda", "Bayundari Suaiba", "Lidyawati Mustapa", "Moh Abijar M. Suaib"],
        ["Tri Juliansi Sabu", "Fri Anisa Olii", "Siti Amelia Arsyad", "Fatma Maulana Panantu", "Fadlun Husain", "Safrudin Aambo", "Moh Arsyad Ibrahim"],
        ["Siti Naysila Ente", "Sintia Abudi", "Aulia Otoluwa", "Eca Putri Raden Adimula", "Kurnia B. Otoluwa", "Moh Jupri Harun", "Muh. Arya Rido Udin"],
        ["Vita Pratiwi R. Bau", "Selvina Sapari", "Siti Hartina Lapamalu", "Melda Mustapa", "Yuningsih S. Ningko", "Moh Fajrin Mosii", "Aditya Utina"],
        ["Salsabila Lakusu", "Tiansi Karim", "Afreta Ses", "Naysila Aulia Putri Nasim", "Nur Sintia Hasan", "Angel Prastiwi Salehe", "Aldi Moha"],
    ]

    const dayComponents = [
        null, // Kosongkan indeks 0
        Senin,
        Selasa,
        Rabu,
        Kamis,
        Jumat,
    ]

    // Menampilkan komponen berdasarkan hari saat ini
    const TodayComponent = dayComponents[new Date().getDay()]

    // Menampilkan nama-nama piket sesuai dengan hari saat ini
    const currentPiketNames = piketGroup[new Date().getDay() - 1]

    console.log("Current Day:", currentDay)
    console.log("Piket Group:", piketGroup)
    console.log("Current Piket Names:", currentPiketNames)

    return (
        <>
            {/* Jadwal Mapel */}
            <div className="lg:flex lg:justify-center lg:gap-32 lg:mb-10 lg:mt-16 ">
                <div className="text-white flex flex-col justify-center items-center mt-8 md:mt-3 overflow-y-hidden">
                    <div className="text-2xl font-medium mb-5" data-aos="fade-up" data-aos-duration="500">
                        {currentDay}
                    </div>
                    <div data-aos="fade-up" data-aos-duration="400">
                        {TodayComponent ? (
                            <React.Suspense fallback={<p>Loading...</p>}>
                                <TodayComponent />
                            </React.Suspense>
                        ) : (
                            <p className="opacity-50">Tidak Ada Jadwal Hari Ini</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Jadwal Piket */}
            <div className="text-white flex flex-col justify-center items-center mt-8 lg:mt-0 lg:mb-[10rem] mb-10 overflow-y-hidden">
                <div
                    className="text-2xl font-medium mb-5 text-center"
                    data-aos="fade-up"
                    data-aos-duration="500">
                    Piket
                </div>
                {currentPiketNames && currentPiketNames.length > 0 ? (
                    currentPiketNames.map((piketName, index) => (
                        <div
                            key={index}
                            className={` border-t-2 border-white flex justify-center py-[0.50rem] w-72 px-3 ${
                                index === currentPiketNames.length - 1 ? "border-b-2" : ""
                            }`}
                            data-aos="fade-up"
                            data-aos-duration={600 + index * 100}>
                            <div className="text-base font-medium">{piketName}</div>
                        </div>
                    ))
                ) : (
                    <p className="opacity-50">Tidak Ada Jadwal Hari Ini</p>
                )}
            </div>
        </>
    )
}

export default Schedule
