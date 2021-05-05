import { Row } from "./row";

export interface MetricInfo {
  businessGroup: string;
  metricName: string;
  metricDesc: string;
  maxScore: number;
  subMetric: boolean;
  row:Row[];
}
