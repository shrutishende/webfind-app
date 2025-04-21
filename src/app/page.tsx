import Finder from "../lib/features/finder/Finder";
import ResultList from "./components/ResultList";

export default function Home() {
    return (
        <div>
            <div className="my-9">
                <h1 className="text-center font-extrabold text-5xl text-blue-500">
                    Welcome to WebFind!
                </h1>
            </div>

            <hr></hr>
            <Finder />
            <ResultList />
        </div>
    );
}
