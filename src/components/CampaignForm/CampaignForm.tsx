import { FaPlus, FaMinus } from "react-icons/fa";
import Button from "../Button/index";

export type LinkType = {
  link: string;
  description: string;
};

interface CampaignFormProps {
  links: LinkType[];
  steps: string[];
  description: string;
  name: string;
  linkCount: number;
  stepCount: number;
  setLinks: React.Dispatch<React.SetStateAction<LinkType[]>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setLinkCount: React.Dispatch<React.SetStateAction<number>>;
  setSteps: React.Dispatch<React.SetStateAction<string[]>>;
  setStepCount: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: () => void;
}

function CampaignForm({
  description,
  linkCount,
  links,
  name,
  setDescription,
  setLinkCount,
  setLinks,
  setName,
  setStepCount,
  setSteps,
  stepCount,
  steps,
}: CampaignFormProps) {
  const handleLinkCountIncrement = () => {
    setLinkCount(linkCount + 1);
  };
  const handleLinkCountDecrement = (i: number) => {
    setLinkCount(linkCount - 1);
    // remove object with that index from the array
    const newLinks = links.filter((value, index) => index !== i);
    setLinks(newLinks);
  };

  const handleLinkOnchange = (
    index: number,
    field: "link" | "description",
    entry: string
  ) => {
    const updatedLinks = links.map((link, i) => {
      if (index === i) {
        // carry out computation here
        link[field] = entry;
        return link;
      } else {
        return link;
      }
    });
    setLinks(updatedLinks);
  };
  const handleStepCountDecrement = (i: number) => {
    setStepCount(stepCount - 1);
    const newSteps = steps.filter((value, index) => index !== i);
    setSteps(newSteps);
  };

  const handleStepOnchange = (index: number, entry: string) => {
    setSteps((prevSteps) =>
      prevSteps.map((step, i) => (i === index ? entry : step))
    );
  };

  return (
    <div className="border border-white rounded-md p-4 my-5 font-montserrat">
      <div className="flex items-center space-x-1 mb-4">
        <h2 className="text-xl font-bold text-white capitalize">
          New campiagn
        </h2>
        <FaPlus size={20} color="white" />
      </div>

      {/* campaign form */}
      <form>
        {/* airdrop name */}
        <div className="w-full grid md:grid-cols-2 gap-8">
          <div className="mb-4 flex flex-col space-y-2">
            <label className="text-white mb-2">Name</label>
            <input
              type="text"
              className=" w-full border border-white outline-none p-2 bg-white rounded-md text-black "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* airdrop description */}
          <div className=" flex flex-col space-y-2">
            <label className="text-white mb-2">Description</label>
            <textarea
              name=""
              id=""
              value={description}
              className=" w-full border border-white outline-none p-2 bg-white rounded-md text-black"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          {/* airdrop links */}
          <div className="">
            {Array(linkCount)
              .fill(linkCount)
              .map((value, index) => {
                return (
                  <div className="mb-2">
                    <label className="text-white mb-2">Link {index + 1}</label>
                    {/* link div */}
                    <>
                      <div className="flex flex-col space-y-2 mb-1">
                        <input
                          type="text"
                          className=" w-full border border-white outline-none p-2 bg-white rounded-md text-black"
                          placeholder="link description"
                          value={links[index]?.description}
                          onChange={(e) =>
                            handleLinkOnchange(
                              index,
                              "description",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="flex items-center space-x-3">
                        <input
                          type="text"
                          className=" w-full border border-white outline-none p-2 bg-white rounded-md text-black "
                          placeholder="link"
                          value={links[index]?.link}
                          onChange={(e) =>
                            handleLinkOnchange(index, "link", e.target.value)
                          }
                        />
                        {linkCount - 1 === index ? (
                          <button
                            type="button"
                            onClick={handleLinkCountIncrement}
                            className="p-2 rounded-md border border-white "
                          >
                            <FaPlus size={30} color="white" />
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleLinkCountDecrement(index)}
                            className="p-2 rounded-md border border-white "
                          >
                            <FaMinus size={30} color="white" />
                          </button>
                        )}
                      </div>
                    </>
                  </div>
                );
              })}
          </div>
          {/* airdrop steps */}
          <div>
            {Array(stepCount)
              .fill(stepCount)
              .map((value, index) => {
                return (
                  <div className="mb-2">
                    <label className="text-white mb-2">Step {index + 1}</label>
                    {/* link div */}
                    <>
                      <div className="flex flex-col space-y-2 mb-1"></div>
                      <div className="flex items-center space-x-3">
                        <input
                          type="text"
                          className=" w-full border border-white outline-none p-2 bg-white rounded-md text-black "
                          placeholder="enter step"
                          value={steps[index]}
                          onChange={(e) =>
                            handleStepOnchange(index, e.target.value)
                          }
                        />
                        {stepCount - 1 === index ? (
                          <button
                            type="button"
                            onClick={() => setStepCount((prev) => prev + 1)}
                            className="p-2 rounded-md border border-white "
                          >
                            <FaPlus size={30} color="white" />
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleStepCountDecrement(index)}
                            className="p-2 rounded-md border border-white "
                          >
                            <FaMinus size={30} color="white" />
                          </button>
                        )}
                      </div>
                    </>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex justify-end">
          <Button text="Submit" callback={() => console.log("submit form")} />
        </div>
      </form>
    </div>
  );
}

export default CampaignForm;
