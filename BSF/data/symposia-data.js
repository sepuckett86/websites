const data = [
  {
    "YEAR": 1950,
    "TITLE": "No formal title",
    "CHAIR": ""
  },
  {
    "YEAR": 1951,
    "TITLE": "No formal title",
    "CHAIR": ""
  },
  {
    "YEAR": 1952,
    "TITLE": "Normal Skin, Normal Morphology, Growth Dynamics, and Physiology of the Skin",
    "CHAIR": ""
  },
  {
    "YEAR": 1953,
    "TITLE": "Dynamic of Skin Growth",
    "CHAIR": ""
  },
  {
    "YEAR": 1954,
    "TITLE": "Keratin and Keratinization",
    "CHAIR": ""
  },
  {
    "YEAR": 1955,
    "TITLE": "no meeting to our knowledge",
    "CHAIR": ""
  },
  {
    "YEAR": 1956,
    "TITLE": "Hair Follicles",
    "CHAIR": ""
  },
  {
    "YEAR": 1957,
    "TITLE": "Sebaceous Glands",
    "CHAIR": ""
  },
  {
    "YEAR": 1957,
    "TITLE": "The Biology of Hair Growth",
    "CHAIR": ""
  },
  {
    "YEAR": 1958,
    "TITLE": "Dermis",
    "CHAIR": ""
  },
  {
    "YEAR": 1959,
    "TITLE": "Cutaneous Innervation",
    "CHAIR": "William Montagna, Ph.D."
  },
  {
    "YEAR": 1960,
    "TITLE": "Blood Vessels and Circulation of Blood in the Skin",
    "CHAIR": "William Montagna, Ph.D., Richard Ellis"
  },
  {
    "YEAR": 1961,
    "TITLE": "Eccrine Sweat Glands and Eccrine Sweating",
    "CHAIR": "William Montagna, Ph.D., Richard A. Ellis and Alene F. Silver"
  },
  {
    "YEAR": 1962,
    "TITLE": "The Sebaceous Glands",
    "CHAIR": "William Montagna, Ph.D., Richard A. Ellis and Alene F. Silver"
  },
  {
    "YEAR": 1963,
    "TITLE": "Wound Healing",
    "CHAIR": "William Montagna, Ph.D., Rupert E. Billingham, S.SC., F.R.S."
  },
  {
    "YEAR": 1964,
    "TITLE": "Aging",
    "CHAIR": "William Montagna, Ph.D."
  },
  {
    "YEAR": 1965,
    "TITLE": "Carcinogenesis",
    "CHAIR": "William Montagna, Ph.D., Richard L. Dobson, M.D."
  },
  {
    "YEAR": 1966,
    "TITLE": "The Pigmentary System",
    "CHAIR": "William Montagna, Ph.D., Funan Hu"
  },
  {
    "YEAR": 1967,
    "TITLE": "Hair Growth",
    "CHAIR": "William Montagna, Ph.D., Richard L. Dobson, M.D."
  },
  {
    "YEAR": 1968,
    "TITLE": "The Dermis",
    "CHAIR": "Peter Bentley, Ph.D."
  },
  {
    "YEAR": 1969,
    "TITLE": "Immunology and the Skin",
    "CHAIR": "Rupert E. Billingham, S.SC., F.R.S."
  },
  {
    "YEAR": 1970,
    "TITLE": "Pharmacology and the Skin",
    "CHAIR": "Eugene J. Van Scott, M.D., FAAD, Ricbhard Stoughton, M.D."
  },
  {
    "YEAR": 1971,
    "TITLE": "Cutaneous Genetics",
    "CHAIR": "William Montagna, Ph.D, Linda Pasztor, Walter C. Quevedo, Jr., Ph.D., and Paul S. Porter, M.D.b"
  },
  {
    "YEAR": 1972,
    "TITLE": "Sebaceous Glands and Acne Vulgaris",
    "CHAIR": "Mary Bell, John S. Strauss, M.D."
  },
  {
    "YEAR": 1973,
    "TITLE": "Mammary and Apocrine Glands",
    "CHAIR": "Rupert E. Billingham, S.SC., F.R.S."
  },
  {
    "YEAR": 1974,
    "TITLE": "The Epidermis",
    "CHAIR": "A.G. Matoltsy, M.D."
  },
  {
    "YEAR": 1975,
    "TITLE": "Perspectives and Retrospectives in Cutaneous Biology",
    "CHAIR": "Albert Kligman, M.D., Ph.D., Thomas Fitzpatrick, M.D., Ph.D., Eugene Van Scott, MD, FAAD"
  },
  {
    "YEAR": 1976,
    "TITLE": "Cutaneous Innervation and Modalities of Cutaneous Sensibility",
    "CHAIR": "John Brookhart, Ph.D"
  },
  {
    "YEAR": 1977,
    "TITLE": "Cells of the Dermis",
    "CHAIR": "Marvin Karasek, Ph.D."
  },
  {
    "YEAR": 1978,
    "TITLE": "Aging of the Skin",
    "CHAIR": "Albert Kligman, M.D., Ph.D."
  },
  {
    "YEAR": 1979,
    "TITLE": "Dendritic and Lymphocytic Cells in the Epidermis",
    "CHAIR": "Rupert E. Billingham, S.SC., F.R.S."
  },
  {
    "YEAR": 1980,
    "TITLE": "Photobiology and Photomedicine",
    "CHAIR": "Leonard C. Harber, Frederick D. Malkinson, John A. Parrish"
  },
  {
    "YEAR": 1981,
    "TITLE": "Structural Elements of the Dermis",
    "CHAIR": "Karen A. Holbrook, Ph.D, Sheldon R. Pinnell, M.D., Jouni Uitto, M.D., Ph.D."
  },
  {
    "YEAR": 1982,
    "TITLE": "Biology of the Keratinocyte In Vitro",
    "CHAIR": "Karen A. Holbrook, Ph.D., Marvin Karasek, Ph.D., Cynthia Marcelo, Ph.D., Michel Prunieras, M.D."
  },
  {
    "YEAR": 1983,
    "TITLE": "Cutaneous Oncogenic Viruses",
    "CHAIR": "Marcus A. Conant, M.D., Leslie M. Hallick, Ph.D., Douglas Lowy, M.D."
  },
  {
    "YEAR": 1984,
    "TITLE": "Cutaneous Immunobiology",
    "CHAIR": "James N. Gilliam, M.D., Marvin B. Rittenberg, and Stephen I. Katz, M.D., Ph.D."
  },
  {
    "YEAR": 1985,
    "TITLE": "Prenatal Diagnosis of Heritable Skin Disease/Biology of Heritable Skin Diseases",
    "CHAIR": "Ingrun Anton-Lamprecht, Ph.D, Eugene A. Bauer, M.D., Tobias Gedde-Dahl"
  },
  {
    "YEAR": 1986,
    "TITLE": "Molecular Basis of Nutritional Dermatoses",
    "CHAIR": ""
  },
  {
    "YEAR": 1987,
    "TITLE": "Pigment Cell Biology and Oncology",
    "CHAIR": "Kirk D. Wuepper, M.D., Yutaka Mishima, Hans Rohrsman, and Walter Quevado, Ph.D."
  },
  {
    "YEAR": 1988,
    "TITLE": "Vascular Elements of the Dermis",
    "CHAIR": "Irwin Braverman, M.D., Richard D. Sontheimer, M.D."
  },
  {
    "YEAR": 1989,
    "TITLE": "Cutaneous Receptors in Cutaneous Biology: Interleukin, Immunoglobulin-Family and Matrix Receptors",
    "CHAIR": "S. Wright Caughman, M.D., John C. Ansel, M.D."
  },
  {
    "YEAR": 1990,
    "TITLE": "no meeting",
    "CHAIR": ""
  },
  {
    "YEAR": 1991,
    "TITLE": "Cell Receptors, Intracellular Signalling and Transcriptional Response Elements",
    "CHAIR": "David Norris, M.D., S. Wright Caughman, M.D."
  },
  {
    "YEAR": 1992,
    "TITLE": "Fundamentals of Hair Biology",
    "CHAIR": "Andrew Messenger, M.D."
  },
  {
    "YEAR": 1993,
    "TITLE": "Genetics of Skin Disease",
    "CHAIR": "Jouni Uitto, M.D., Ph.D., Ervin Epstein, M.D., Joseph Yohn, M.D."
  },
  {
    "YEAR": 1994,
    "TITLE": "Lymphocytes in Skin Disease: From Activation to Immunodeficiency",
    "CHAIR": "Georg Stingl, Thomas Kupper, M.D."
  },
  {
    "YEAR": 1995,
    "TITLE": "Skin Cancer: Pathomechanisms, Epidemiology and Clinical Manifestations and New Approaches to Treatment",
    "CHAIR": "Stuart Yuspa, M.D., David Bickers, M.D."
  },
  {
    "YEAR": 1996,
    "TITLE": "Cutaneous Innervation and Neurobiology of the Skin",
    "CHAIR": "K. Hollbrook, Ph.D., John Ansel, M.D., K. Pfenninger"
  },
  {
    "YEAR": 1997,
    "TITLE": "Aging of the Skin: Basic Mechanisms and Approaches to Prevention",
    "CHAIR": "Barbara Gilchrest, M.D., Vilhelm Bohr, M.D., Ph.D, John J. Voorhees, M.D."
  },
  {
    "YEAR": 1998,
    "TITLE": "Photobiology: The Molecular Mechanisms of Light-Induced Damage and the Effects of Light on Human Skin Diseases",
    "CHAIR": "Paul Bergstresser, M.D., Frank Gasparov"
  },
  {
    "YEAR": 1999,
    "TITLE": "Endothelial Cells and Angiogenesis: From Benchtop to the Bedside",
    "CHAIR": "Jack Arbiser, M.D., Ph.D."
  },
  {
    "YEAR": 2000,
    "TITLE": "Emerging Infections and the Skin",
    "CHAIR": "Robert Schooley, M.D., Madelinez Duvic, M.D., Stephen Tyring, M.D."
  },
  {
    "YEAR": 2001,
    "TITLE": "Progress in Cutaneous Biology and Investigative Dermatology",
    "CHAIR": "David Norris, M.D."
  },
  {
    "YEAR": 2002,
    "TITLE": "Autoimmunity and the Skin",
    "CHAIR": "David Norris, M.D."
  },
  {
    "YEAR": 2003,
    "TITLE": "Stem Cells of Skin",
    "CHAIR": "Jackie Bickenbach, Ph.D."
  },
  {
    "YEAR": 2004,
    "TITLE": "Keratinocyte and Melanocyte Cancers of Skin: Interacting Pathways",
    "CHAIR": "Molly Kulesz-Martin, Ph.D., Susan Fischer, Ph.D., G. Timothy Bowden, Ph.D."
  },
  {
    "YEAR": 2005,
    "TITLE": "Tissue Remodeling and Repair: Molecular Mechanisms and Clinical Challenges",
    "CHAIR": "Sabine Werner, Ph.D."
  },
  {
    "YEAR": 2006,
    "TITLE": "Signaling to Structures: Skin Appendages, Development and Diseases",
    "CHAIR": "Sarah Millar, Ph.D., George Cotsarelis, M.D., Andrzej Dlugosz, M.D."
  },
  {
    "YEAR": 2007,
    "TITLE": "Epidermal T-cell interactions: Clinicopathological and Basic Mechanisms",
    "CHAIR": "Kevin Cooper, M.D., Richard Sontheimer, M.D."
  },
  {
    "YEAR": 2008,
    "TITLE": "Biologic Basis of Psoriasis",
    "CHAIR": "Andrew Blauvelt, M.D., Anne Bowcock, Ph.D."
  },
  {
    "YEAR": 2009,
    "TITLE": "Genetics & Epigenetics of Skin Diseases",
    "CHAIR": "Angela Christiano, Ph.D."
  },
  {
    "YEAR": 2010,
    "TITLE": "Small Molecules: Skin as the First Line of Defense",
    "CHAIR": "Richard Gallo, M.D., Ph.D."
  },
  {
    "YEAR": 2011,
    "TITLE": "Advances in Science and Medicine Catalyzed by Pioneering Skin Research",
    "CHAIR": "Stuart H. Yuspa, M.D."
  },
  {
    "YEAR": 2012,
    "TITLE": "Keeping It All Together: Adhesion, the Cytoskeleton & Signaling in Morphogenesis & Tissue Function",
    "CHAIR": "Kathleen J. Green, Ph.D. and Masayuki Amagai, M.D., Ph.D."
  },
  {
    "YEAR": 2013,
    "TITLE": "Light and Skin: How Light Sustains, Damages, Treats, Images and Modifies Skin Biology",
    "CHAIR": "R. Rox Anderson, M.D."
  },
  {
    "YEAR": 2014,
    "TITLE": "Skin Aging: Molecular Mechanisms and Tissue Consequences",
    "CHAIR": "Barbara A. Gilchrest, M.D."
  },
  {
    "YEAR": 2015,
    "TITLE": "Harnessing Stem Cells to Reveal Novel Skin Biology and Disease Treatment",
    "CHAIR": "Xiao-Jing Wang, M.D., Ph.D. and Valerie Horsley, Ph.D."
  },
  {
    "YEAR": 2016,
    "TITLE": "The Skin: Our Sensory Organ for Itch, Pain, Touch and Pleasure",
    "CHAIR": "Gil Yosipovitch, M.D."
  },
  {
    "YEAR": 2017,
    "TITLE": "Precision Dermatology: Next Generation Prevention, Diagnosis, and Treatment",
    "CHAIR": "Jakub Tolar, M.D., Ph.D."
  },
  {
    "YEAR": 2018,
    "TITLE": "Melanoma to Vitiligo The Melanocyte in Biology and Medicine",
    "CHAIR": "Sancy A. Leachman, M.D., Ph.D. and Thomas J. Hornyak, M.D., Ph.D."
  },
  {
    "YEAR": 2019,
    "TITLE": "Decoding Complex Skin Disease: Integrating Genetics, Genomics & Disease Biology",
    "CHAIR": "James T. Elder, M.D., Ph.D. and Johann E. Gudjonsson, M.D., Ph.D."
  }
];
  
export default data;
