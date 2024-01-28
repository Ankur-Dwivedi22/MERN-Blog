import { Button } from "flowbite-react";
import imageContent from "../assets/portfolio.png";

export default function CallToAction() {

  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className="flex-1 justify-center flex flex-col">
            <h2 className="text-2xl">
                Want to know more about me and see other interesting projects ?
            </h2>
            <p className="text-gray-500 my-2">
                Checkout my portfolio website here!!!
            </p>
            <Button gradientDuoTone='purpleToPink' className="rounded-tl-xl rounded-bl-none">
            <a href="https://webtips.dev/100-javascript-project-ideas" target="_blank" rel="noopener noreferrer">Portfolio</a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src={imageContent} />
        </div>
    </div>
  )
}
