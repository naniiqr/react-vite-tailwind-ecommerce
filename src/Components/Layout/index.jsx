const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-28 items-center mt-20 text-cyan-950 font-bold text-3xl">
            {children}
        </div>
    )
}

export default Layout