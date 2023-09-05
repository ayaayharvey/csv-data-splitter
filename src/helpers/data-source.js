const sampleData = {
  c_year: 2023,
  c_month: 7,
  prev_month: 6,
  prev_year: 2023,
  product: "SSS",
  pnnumber: "SSS-2021-14961",
  // client_code: "S03052019-000366",
  // customer_name: "PENAFIEL, ROSALINA MAPUSAO",
  montly: 3600,
  fpdate: "########",
  maturity_date: "########",
  penday: 8,
  pbalance: 7448,
  source_of_collection: "",
  lr: 13300,
  par_af_bal: 7448,
  par_status_last_month: "PAR",
  ma_coll: "",
  p_coll: "",
  i_coll: "",
  par_status_this_month: "PAR",
  principal_balance: 7448,
  collection_tagging: "PAR PADIN",
  amt_par50_collection: "",
  amt_af_collection: "",
  additional_par: "",
  total_par_vs_actual_coll: 7448,
  par_update: "PAR TO PAR",
  over_due: "OVERDUE",
  par50_collection_or_add_par: "",
  aging: 120,
  term: 20,
  should_be: 72000,
  past_due: 13300,
  pn_orig: 72000,
  months_since_release: 19,
  branch: "LGO",
  birthday: "########",
  release_date: "########",
  for_wrong_first_payment: "",
  passbook_atm: "ATM",
  bank_branch: "LIGAO",
  non_starter_no_first_payment: "",
  pension_type: "RETIREE",
  loan_type: "PRETERM",
  lr_balance_after_collection: "",
  count_birth_month: 5,
  percentage_principal: 0.56,
  percentage_interest: 0.44,
  interest_beg_of_the_month: 5852,
  principal_original: 40320,
  interest_original: 31680,
  principal_balance_after_collection: "",
  interest_balance_after_collection: "",
  principal_paid: "",
  interest_paid: "",
  principal_should_be: 40320,
  interest_should_be: 31680,
  principal_for_collection: "",
  interest_for_collection: "",
};

const sampleAccounts = [
  {
    client_code: "S03052019-000366",
    customer_name: "PENAFIEL, ROSALINA MAPUSAO",
  },
  {
    client_code: "S07272021-003180",
    customer_name: "ROQUE, MARIA CECILIA ASUNCION",
  },
  {
    client_code: "S10182021-004616",
    customer_name: "MARGALLO, ARSENIO MANDANE",
  },
  {
    client_code: "S09272021-004273",
    customer_name: "MARIANO, LEAH VALENTIN",
  },
  {
    client_code: "S09022020-002612",
    customer_name: "PALOMARES, SALVACION MONTALBAN",
  },
];

const responseClients = {
  columns: [
    "customer_name",
    "pnnumber",
    "c_year",
    "c_month",
    "prev_month",
    "prev_year",
    "product",
    "client_code",
    "montly",
    "fpdate",
    "maturity_date",
    "penday",
    "pbalance",
    "source_of_collection",
    "lr",
    "par_af_bal",
    "par_status_last_month",
    "ma_coll",
    "p_coll",
    "i_coll",
    "par_status_this_month",
    "principal_balance",
    "collection_tagging",
    "amt_par50_collection",
    "amt_af_collection",
    "additional_par",
    "total_par_vs_actual_coll",
    "par_update",
    "over_due",
    "par50_collection_or_add_par",
    "aging",
    "term",
    "should_be",
    "past_due",
    "pn_orig",
    "months_since_release",
    "branch",
    "birthday",
    "release_date",
    "for_wrong_first_payment",
    "passbook_atm",
    "bank_branch",
    "non_starter_no_first_payment",
    "pension_type",
    "loan_type",
    "lr_balance_after_collection",
    "count_birth_month",
    "percentage_principal",
    "percentage_interest",
    "interest_beg_of_the_month",
    "principal_original",
    "interest_original",
    "principal_balance_after_collection",
    "interest_balance_after_collection",
    "principal_paid",
    "interest_paid",
    "principal_should_be",
    "interest_should_be",
    "principal_for_collection",
    "interest_for_collection",
  ],
  items: Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    client_code: sampleAccounts[index].client_code,
    customer_name: sampleAccounts[index].customer_name,
    ...sampleData,
  })),
  item: [
    {
      id: 1,
      client_code: "C07062020-000187",
      customer_name: "FORMOSO, IYANIA CABATANIA",
      number_of_loans: 1,
    },
    {
      id: 2,
      client_code: "C05212021-000190",
      customer_name: "CATAPUSAN, ALYSSA MANIBOG",
      number_of_loans: 1,
    },
    {
      id: 3,
      client_code: "C07122006-001028",
      customer_name: "LUATON, GENARO SERRATO",
      number_of_loans: 5,
    },
    {
      id: 4,
      client_code: "C11192019-000443",
      customer_name: "BERNAN, SHAINA JENAN PUSDAN",
      number_of_loans: 1,
    },
    {
      id: 5,
      client_code: "C01272022-000037",
      customer_name: "MACUA, MAXX AMADEO",
      number_of_loans: 1,
    },
    {
      id: 6,
      client_code: "C02172022-000069",
      customer_name: "SALAZAR, MARCO ANTHONY PATULA",
      number_of_loans: 2,
    },
    {
      id: 7,
      client_code: "C11272020-000337",
      customer_name: "MACALABA, JOHAIRA RAJAH",
      number_of_loans: 1,
    },
    {
      id: 8,
      client_code: "C11082019-000428",
      customer_name: "GENOVEA, NEAL ARELLANO",
      number_of_loans: 3,
    },
    {
      id: 9,
      client_code: "C05242017-000103",
      customer_name: "BADDONGON, ELIZABETH BASILAW",
      number_of_loans: 2,
    },
    {
      id: 10,
      client_code: "C10102003-001681",
      customer_name: "PRIELA, PEDRO RIVERO",
      number_of_loans: 13,
    },
    {
      id: 11,
      client_code: "C09072011-001874",
      customer_name: "LAMBUSON, ELEUTERIO BERNADAS",
      number_of_loans: 4,
    },
    {
      id: 12,
      client_code: "C01272021-000026",
      customer_name: "MANLANGIT, WALLACE ALEXANDER DELOS REYES",
      number_of_loans: 1,
    },
    {
      id: 13,
      client_code: "C10162009-000418",
      customer_name: "NAPOLES, ALBERTO PARDILLA",
      number_of_loans: 2,
    },
  ],
};

const responseLoans = {
  columns: ["pnnumber", "pbalance", "monthly", "maturity_date"],
  items: [
    {
      id: 1,
      pnnumber: "PEN-2022-00421",
      pbalance: "147873.36",
      monthly: "9000",
      maturity_date: "25/03/2027",
    },
    {
      id: 2,
      pnnumber: "PEN-2022-00422",
      pbalance: "147873.36",
      monthly: "9000",
      maturity_date: "25/03/2027",
    },
    {
      id: 3,
      pnnumber: "PEN-2022-00423",
      pbalance: "147873.36",
      monthly: "9000",
      maturity_date: "25/03/2027",
    },
  ],
};

export { responseClients, responseLoans };