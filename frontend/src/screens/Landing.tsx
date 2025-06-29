import { useNavigate } from "react-router-dom";


export const Landing = () =>{
    const navigate = useNavigate();

    return <div className="flex justify-center">
        <div className="pt-8 max-w-screen-lg>">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-center">
                    <img src={"/chessboard.jpeg"} alt="Chessboard" className="max-w-96" />
                </div>
                <div className="pt-16">
                    <div className="flex justify-center">
                        <h1 className="text-4xl font-bold text-white">Welcome to the Chess Game</h1>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button onClick={() => navigate("/game")} className="px-8 py-4 text-2xl bg-green-500 hover:bg-green-700 text-white font-bold rounded">
                            Start Playing
                        </button>
                    </div>

                </div>

            </div>
        </div>

    </div>

}