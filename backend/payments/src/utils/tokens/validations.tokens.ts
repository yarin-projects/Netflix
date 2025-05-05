const required = 'is required';
export const validations = {
  userId: {
    required: `User Id ` + required,
    message: 'Invalid user id',
  },
  subscriptionPlanId: {
    required: `Subscription Plan Id ` + required,
    message: 'Invalid subscription plan id',
  },
  orderId: {
    required: `Order Id ` + required,
    message: 'Invalid order id',
  },
};
