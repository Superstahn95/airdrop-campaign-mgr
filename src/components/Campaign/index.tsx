import { Campaign } from "../../pages/Campaigns";

interface CampaignCardProps {
  campaign: Campaign;
}

function CampiagnCard({ campaign }: CampaignCardProps) {
  return (
    <div className="border border-white rounded-md p-4 font-montserrat">
      <p className="text-white capitalize font-bold">{campaign.name}</p>

      {/* description */}
      <div className="mt-3 text-white">{campaign.description}</div>
      {/* links */}
      <div className="flex flex-wrap space-x-2 my-4">
        {campaign.campaignLinks.map((link) => (
          <a className=" rounded-[40px] p-2 min-w-[70px] text-xs capitalize h-[40px] flex items-center justify-center bg-slate-900 text-white">
            {link.description}
          </a>
        ))}
      </div>
      <div className="text-white text-xs">
        Status:{" "}
        {campaign.isRunning ? (
          <span className="text-xs text-green-500 font-bold ml-2">Open</span>
        ) : (
          <span className="text-xs text-red-500 font-bold ml-2">Closed</span>
        )}
      </div>
    </div>
  );
}

export default CampiagnCard;
