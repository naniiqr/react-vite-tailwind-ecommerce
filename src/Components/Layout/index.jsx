const Layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center mt-20 bg-sky-100 text-cyan-950 font-bold text-3xl">
            {children}
        </div>
    )
}

export default Layout