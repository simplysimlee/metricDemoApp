import { MetricInfo } from "./metric-info";

export interface Product {
  id: number | null;
  productName: string;
  productCode: string;
  proddescription?: string;
  prodRating?: number;
  metricInfo?:MetricInfo[];
}
