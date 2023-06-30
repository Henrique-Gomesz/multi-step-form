export enum PlanTypes {
  arcade = "Arcade",
  advanced = "Advanced",
  pro = "Pro",
}

export enum PaymentsPlan {
  monthly = "monthly",
  yearly = "yearly",
}

export interface PlanCardProps {
  plan: PlanTypes;
  price: string;
  paymentPlan: PaymentsPlan
  onCardClick: (planType:PlanTypes) => void
  isSelected: boolean
}
