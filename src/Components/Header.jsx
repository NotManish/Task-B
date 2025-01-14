function Header() {
    return (
        <>
            <div className="flex flex-col justify-center   h-[50px] md:h-[60px] lg:h-[70px] ">
                <p className="text-2xl font-bold text-black md:text-3xl lg:text-4xl">
                    Kanban Board
                </p>
            </div>
            <hr className="border-gray-500 w-screen" />
        </>
    );
}

export default Header;
