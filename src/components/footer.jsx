

function Footer(){


    return(
        <>
            <div className="w-full bg-violet-400 flex justify-between py-4 text-center">
                <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                    <nav className="py-4 px-4 list-none mb-10 rounded-lg">
                        <li>
                        <a className="text-white">home</a>
                        </li>
                        <li>
                        <a className="text-white">About</a>
                        </li>
                        <li>
                        <a className="text-white">blog</a>
                        </li>
                        <li>
                        <a className="text-white">F.A.Qs</a>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                    <nav className="py-4 px-4 list-none mb-10 rounded-lg">
                        <li>
                        <a className="text-white">patnas plaza</a>
                        </li>
                        <li>
                        <a className="text-white">Litein</a>
                        </li>
                        <li>
                        <a className="text-white">Litein</a>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                    <nav className="py-4 px-4 list-none mb-10 rounded-lg">
                        <li>
                        <a className="text-white">Facebook</a>
                        </li>
                        <li>
                        <a className="text-white">Twitter</a>
                        </li>
                        <li>
                        <a className="text-white">Linkedln</a>
                        </li>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Footer;