export const initialRoutines = [
  { id: '1', step: 'Cleanse', product: 'Gentle Foaming Cleanser', type: 'morning', completed: true },
  { id: '2', step: 'Hydrate', product: 'Hyaluronic Acid Serum', type: 'morning', completed: false },
  { id: '3', step: 'Protect', product: 'SPF 50+ Broad Spectrum', type: 'morning', completed: false },
  { id: '4', step: 'Double Cleanse', product: 'Oil-based Cleanser', type: 'night', completed: false },
  { id: '5', step: 'Exfoliate / Treat', product: '2% BHA Salicylic Acid', type: 'night', completed: false },
  { id: '6', step: 'Moisturize', product: 'Barrier Repair Ceramide Cream', type: 'night', completed: false },
];

export const initialAcneLogs = [
  { id: '1', date: '2026-10-06', location: 'Left Cheek', severity: 'Mild', trigger: 'Late sleep', notes: 'Slight inflammation subsiding' },
  { id: '2', date: '2026-10-08', location: 'Chin', severity: 'Moderate', trigger: 'Dairy consumption', notes: 'Applied 1% hydrocolloid patch' },
];

export const initialHairCare = [
  { id: '1', treatment: 'Rosemary Oil Scalp Massage', cadence: '2x per week', lastDone: 'Yesterday', status: 'Optimal' },
  { id: '2', treatment: 'Clarifying Ketoconazole Wash', cadence: '1x per week', lastDone: '4 days ago', status: 'Due Soon' },
  { id: '3', treatment: 'Deep Moisture Hair Mask', cadence: 'Weekly', lastDone: '6 days ago', status: 'Due Today' },
];

export const initialInventory = [
  { id: '1', name: 'SPF 50+ Fluid Sunscreen', brand: 'SkinShield', openDate: '2026-08-15', lifespanMonths: 6, status: 'Active' },
  { id: '2', name: 'Niacinamide 10% + Zinc 1%', brand: 'PureGlow', openDate: '2026-07-01', lifespanMonths: 3, status: 'Replace Soon' },
  { id: '3', name: 'Peptide Night Cream', brand: 'DermaPro', openDate: '2026-09-10', lifespanMonths: 12, status: 'Active' },
];
