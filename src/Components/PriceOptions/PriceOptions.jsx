const PriceOption = () => {
  {
    const priceOptions = [
      {
        id: 1,
        name: 'Basic Membership',
        features: [
          'Access to cardio and weightlifting areas',
          'Limited group fitness classes',
          'No access to premium amenities',
          'Locker room access',
          'Discounts on personal training sessions',
          'Monthly fitness assessment',
        ],
        price: '$29.99/month',
      },
      {
        id: 2,
        name: 'Standard Membership',
        features: [
          'Full access to all gym facilities',
          'Unlimited group fitness classes',
          'Access to sauna and steam room',
          'Locker and towel service included',
          'Access to outdoor sports courts (tennis, basketball)',
          'Discounts on smoothie bar items',
        ],
        price: '$49.99/month',
      },
      {
        id: 3,
        name: 'Premium Membership',
        features: [
          'Priority access to all gym facilities',
          'Personal training sessions included',
          'Access to all premium amenities',
          'Free smoothie bar access',
          'Complimentary massage sessions',
          'Exclusive access to VIP events',
        ],
        price: '$99.99/month',
      },
    ];
  }

  return (
    <div>
      <h2 className="text-5xl">Best Prices in the town</h2>
      {priceOptions.map(option => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
    </div>
  );
};

export default PriceOption;
