export interface DecisionNote {
  id: string;
  code: string;
  title: string;
  topic: string;
  context: string;
  tradeoff: string;
  decision: string;
  outcome: string;
  tag: string;
}

export const DECISION_NOTES: DecisionNote[] = [
  {
    id: "tenant-isolation",
    code: "DEC_01_SEC",
    title: "Multi-tenant access isolation at the network and auth layer",
    topic: "Security & Multi-Tenant Integrity",
    context:
      "While auditing cross-school workflows in Edmento Resolve, I identified a risk: because multiple institutions shared underlying backend endpoints, a valid session token from School A could potentially authenticate against resources in School B if the request didn't explicitly bind tenant context.",
    tradeoff:
      "We could have implemented complex client-side route guards or relied on client session state, but client-side guards are bypassable and state can drift during multi-school role switches.",
    decision:
      "I enforced a mandatory, signed school_id header injection at the network interceptor layer (Dio) for every API call, backed by strict server-side tenant validation. Simultaneously, I re-architected the auth response model from a flat role structure to a school-to-roles hierarchy, ensuring a user's permissions are strictly scoped to the active tenant.",
    outcome:
      "Zero cross-tenant authentication leakage across 7+ white-label deployments and 10+ user roles, with deterministic session switching.",
    tag: "SECURITY_ISOLATION",
  },
  {
    id: "cost-effective-mileage",
    code: "DEC_02_COST",
    title: "Choosing an operational audit workflow over continuous GPS + AI-OCR",
    topic: "Cost Efficiency & Hardware Pragmatism",
    context:
      "For the School Bus Management platform, we needed a fraud-resistant way to verify mileage claims submitted by outsourced private bus operators.",
    tradeoff:
      "The standard technical proposal was continuous background GPS telemetry paired with cloud-based AI-OCR to read vehicle odometer numbers from video streams. While technically impressive, this would introduce continuous 4G data streaming, rapid phone battery drain on low-end driver devices, and ongoing per-frame cloud inference fees.",
    decision:
      "I proposed and built a structured odometer photo upload workflow: drivers take a single timestamped photo at trip start and completion with basic native image compression, and administrators verify the delta in a batch review queue.",
    outcome:
      "Zero recurring cloud OCR inference costs, minimal battery impact on budget Android devices, and 100% audit reliability without GPS drift false positives.",
    tag: "PRAGMATIC_ARCHITECTURE",
  },
];
