
export default function Footer2() {
    return (
        <div className="mx-auto bg-neutral-950 border-t text-gray-400 flex justify-center flex-col md:flex-row py-6 px-12 md:px-32 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:w-1/3 md:gap-32">
                <a href="#">Terms & Conditions</a >
                <a href="#">Privacy Policy</a >
            </div>
            <div className="md:w-2/3 flex flex-col md:flex-row justify-end">
                <span>Copyright@2024 Manpreet</span>
            </div>
        </div>
    )
}