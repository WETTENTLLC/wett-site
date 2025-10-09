import TradeItem, { Trade } from './TradeItem';

const trades: Trade[] = [
  {
    id: '1',
    itemName: 'Custom Gold Grill (8 top, 8 bottom)',
    traderName: 'Bay\'Hef',
    traderImageUrl: '/placeholders/bayhef.png',
    itemImageUrl: '/placeholders/grill.png', // Placeholder image
    value: 1500,
  },
  {
    id: '2',
    itemName: 'Vintage WETT Lifestyle Hoodie',
    traderName: 'Aura',
    traderImageUrl: '/placeholders/aura.png',
    itemImageUrl: '/placeholders/hoodie.png', // Placeholder image
    value: 250,
  },
  {
    id: '3',
    itemName: '1 Hour Music Production Session',
    traderName: 'Mac Wayne',
    traderImageUrl: '/placeholders/macwayne.png',
    itemImageUrl: '/placeholders/studio.png', // Placeholder image
    value: 500,
  },
  {
    id: '4',
    itemName: 'Box of Exotic Snacks',
    traderName: 'Candy Lady',
    traderImageUrl: '/placeholders/candylady.png',
    itemImageUrl: '/placeholders/snacks.png', // Placeholder image
    value: 100,
  },
];

const TradingDashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Live Trading Feed</h2>
      <div className="space-y-4">
        {trades.map((trade) => (
          <TradeItem key={trade.id} trade={trade} />
        ))}
      </div>
    </div>
  );
};

export default TradingDashboard;
