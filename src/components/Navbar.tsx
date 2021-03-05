
export function Navbar() {


    return (
        <header className="grid grid-cols-3 mb-3 border-b-2 border-black items-end pb-2">
            <div className="text-center "><a href="/contact"><span>CONTACT</span></a></div>
            <div className="max-w-3/4 justify-self-center"><a href="/"><img src="delfi logo transparente.png" alt="logo" /></a></div>
            <div className="text-center"><a href="/aboutme"><span>ABOUT ME</span></a></div>
        </header>
    );
}