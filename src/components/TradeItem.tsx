import Image from 'next/image';

export interface Trade {
  id: string;
  itemName: string;
  traderName: string;
  traderImageUrl: string;
  itemImageUrl: string;
  value: number;
}

const TradeItem = ({ trade }: { trade: Trade }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-4">
      <Image src={trade.itemImageUrl} alt={trade.itemName} width={64} height={64} className="rounded-md" />
      <div className="flex-grow">
        <p className="font-bold text-white">{trade.itemName}</p>
        <p className="text-sm text-gray-400">Value: {trade.value} Credits</p>
      </div>
      <div className="flex items-center gap-2">
        <Image src={trade.traderImageUrl} alt={trade.traderName} width={32} height={32} className="rounded-full" />
        <p className="text-sm text-white">{trade.traderName}</p>
      </div>
    </div>
  );
};

export default TradeItem;
