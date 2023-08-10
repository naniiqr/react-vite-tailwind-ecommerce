const Layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center mt-20 bg-sky-100 text-cyan-600 font-bold">
            { children }
        </div>
    )
}

export default Layout