const information = {
    guide: {
        leafs_appearance_1: {
            description: "dwarf",
            id: 1,
        },
        leafs_appearance_2: {
            description: "normal",
            id: 2,
        },
        leafs_appearance_3: {
            description: "light green",
            id: 3,
        },
        leafs_appearance_4: {
            description: "unnatural",
            id: 4,
        },

        leafs_color_1: {
            description: "yellow",
            id: 5,
        },
        leafs_color_2: {
            description: "brown",
            id: 6,
        },
        leafs_color_3: {
            description: "purple",
            id: 7,
        },
        leafs_color_4: {
            description: "gray",
            id: 8,
        },
        leafs_color_5: {
            description: "dark green",
            id: 9,
        },
        leafs_color_6: {
            description: "green Brkech",
            id: 10,
        },
        leafs_color_7: {
            description: "brown with black rings",
            id: 11,
        },
        leafs_color_8: {
            description: "pink",
            id: 12,
        },

        leafs_colors_positioning_1: {
            description: "middle of the leafs",
            id: 13,
        },
        leafs_colors_positioning_2: {
            description: "full leafs",
            id: 14,
        },
        leafs_colors_positioning_3: {
            description: "from bottom to top",
            id: 15,
        },
        leafs_colors_positioning_4: {
            description: "from top to bottom",
            id: 16,
        },
        leafs_colors_positioning_5: {
            description: "on the lower surface",
            id: 17,
        },
        leafs_colors_positioning_6: {
            description: "On the bottom surface",
            id: 18,
        },

        leafs_spots_colors_1: {
            description: "yellow spots",
            id: 19,
        },
        leafs_spots_colors_2: {
            description: "white spots",
            id: 20,
        },
        leafs_spots_colors_3: {
            description: "gray spots",
            id: 21,
        },
        leafs_spots_colors_4: {
            description: "black spots",
            id: 22,
        },
        leafs_spots_colors_5: {
            description: "brown with black rings",
            id: 23,
        },
        leafs_spots_colors_6: {
            description: "brown spots surrounded by a yellow halo",
            id: 24,
        },

        leafs_other_notes_1: {
            description: "withered",
            id: 25,
        },
        leafs_other_notes_2: {
            description: "wrinkled",
            id: 26,
        },
        leafs_other_notes_3: {
            description: "white powder",
            id: 27,
        },
        leafs_other_notes_4: {
            description: "holes or stabbed",
            id: 28,
        },
        leafs_other_notes_5: {
            description: "spider webs",
            id: 29,
        },
        leafs_other_notes_6: {
            description: "Honey Symposium",
            id: 30,
        },
        leafs_other_notes_7: {
            description: "zigzag tunnels",
            id: 31,
        },
        leafs_other_notes_8: {
            description: "shaped like a cup",
            id: 32,
        },
        leafs_other_notes_9: {
            description: "gray fungal growths",
            id: 33,
        },
        leafs_other_notes_10: {
            description: "purple fungal growths",
            id: 34,
        },
        leafs_other_notes_11: {
            description: "green leaf veins",
            id: 35,
        },
        leafs_other_notes_12: {
            description: "yellow leaf veins",
            id: 36,
        },
        leafs_other_notes_13: {
            description: "leafs irregular",
            id: 37,
        },

        stem_color_1: {
            description: "brown",
            id: 59,
        },

        stems_spots_1: {
            description: "brown spots",
            id: 38,
        },
        stems_spots_2: {
            description: "gray spots",
            id: 39,
        },
        stems_spots_3: {
            description: "black spots",
            id: 40,
        },
        stems_spots_4: {
            description: "yellow spots",
            id: 41,
        },
        stems_spots_5: {
            description: "dark green spots",
            id: 42,
        },
        stems_spots_6: {
            description: "blisters",
            id: 43,
        },
        stems_spots_7: {
            description: "white growths",
            id: 44,
        },
        stems_spots_8: {
            description: "fluffy growths",
            id: 45,
        },
        stems_spots_9: {
            description: "Gray larvaeù in the stem near the soil",
            id: 46,
        },

        fruits_cases_1: {
            description: "black spots on fruits",
            id: 47,
        },
        fruits_cases_2: {
            description: "Brown spots on fruits",
            id: 48,
        },
        fruits_cases_3: {
            description: "White spots on the fruits",
            id: 49,
        },
        fruits_cases_4: {
            description: "Gray spots with black rings on the fruits",
            id: 50,
        },
        fruits_cases_5: {
            description: "Deep cracks on the fruits",
            id: 51,
        },
        fruits_cases_6: {
            description: "sticky liquid on fruits",
            id: 52,
        },
        fruits_cases_7: {
            description: "Spending by larvae on fruits",
            id: 53,
        },

        fruits_positioning_1: {
            description: "on the surface of the fruits",
            id: 54,
        },

        fruits_colors_1: {
            description: "brown",
            id: 55,
        },

        fruits_shapes_1: {
            description: "natural roots",
            id: 56,
        },
        fruits_shapes_2: {
            description: "roots with knots",
            id: 57,
        },

        soil_shapes_1: {
            description: "Zigzag tunnels after irrigation in the soil",
            id: 58,
        },
    },

    rules: {
        R1: {
            left_side: ["37"],
            right_side: "r1",
        },
        R2: {
            left_side: ["5"],
            right_side: "r2",
        },
        R3: {
            left_side: ["r2", "14", "56"],
            right_side: "r3",
        },
        R4: {
            left_side: ["r2", "15", "56"],
            right_side: "r3",
        },
        R5: {
            left_side: ["r2", "14", "35"],
            right_side: "r4",
        },
        R6: {
            left_side: ["r2", "16", "35"],
            right_side: "r4",
        },
        R7: {
            left_side: ["r2", "16"],
            right_side: "r5",
        },
        R8: {
            left_side: ["r2", "13"],
            right_side: "r5",
        },
        R9: {
            left_side: ["r5", "25"],
            right_side: "r6",
        },
        R10: {
            left_side: ["6", "15"],
            right_side: "r7",
        },
        R11: {
            left_side: ["r2", "16"],
            right_side: "r8",
        },
        R12: {
            left_side: ["4", "37"],
            right_side: "r9",
        },
        R13: {
            left_side: ["23"],
            right_side: "r10",
        },
        R14: {
            left_side: ["r10", "r4"],
            right_side: "r11",
        },
        R15: {
            left_side: ["r10", "47"],
            right_side: "r12",
        },
        R16: {
            left_side: ["21", "18", "39"],
            right_side: "r13",
        },
        R17: {
            left_side: ["21", "18", "40"],
            right_side: "r13",
        },
        R18: {
            left_side: ["22", "18", "39"],
            right_side: "r13",
        },
        R19: {
            left_side: ["22", "18", "40"],
            right_side: "r13",
        },
        R20: {
            left_side: ["19", "17", "45"],
            right_side: "r14",
        },
        R21: {
            left_side: ["42", "9", "18"],
            right_side: "r15",
        },
        R22: {
            left_side: ["r10", "43"],
            right_side: "r16",
        },
        R23: {
            left_side: ["19", "17", "27"],
            right_side: "r17",
        },
        R24: {
            left_side: ["25", "55"],
            right_side: "r18",
        },
        R25: {
            left_side: ["r2", "r18"],
            right_side: "r19",
        },
        R26: {
            left_side: ["51"],
            right_side: "r20",
        },
        R27: {
            left_side: ["19", "41"],
            right_side: "r21",
        },
        R28: {
            left_side: ["24", "33"],
            right_side: "r22",
        },
        R29: {
            left_side: ["24", "34"],
            right_side: "r22",
        },
        R30: {
            left_side: ["r12", "38"],
            right_side: "r23",
        },
        R31: {
            left_side: ["59", "44", "55"],
            right_side: "r24",
        },
        R32: {
            left_side: ["r2", "14"],
            right_side: "r25",
        },
        R33: {
            left_side: ["22", "47"],
            right_side: "r26",
        },
        R34: {
            left_side: ["25", "43"],
            right_side: "r27",
        },
        R35: {
            left_side: ["19", "29"],
            right_side: "r28",
        },
        R36: {
            left_side: ["20", "29"],
            right_side: "r28",
        },
        R37: {
            left_side: ["10", "18"],
            right_side: "r28",
        },
        R38: {
            left_side: ["r2", "26", "30", "18"],
            right_side: "r29",
        },
        R39: {
            left_side: ["28", "18"],
            right_side: "r30",
        },
        R40: {
            left_side: ["25", "46"],
            right_side: "r31",
        },
        R41: {
            left_side: ["25", "58"],
            right_side: "r32",
        },
        R42: {
            left_side: ["31"],
            right_side: "r33",
        },
        R43: {
            left_side: ["19", "18"],
            right_side: "r34",
        },
        R44: {
            left_side: ["r11", "30"],
            right_side: "r34",
        },
        R45: {
            left_side: ["9", "1"],
            right_side: "r35",
        },
        R46: {
            left_side: ["12", "36"],
            right_side: "r36",
        },
        R47: {
            left_side: ["r2", "3"],
            right_side: "r37",
        },
        R48: {
            left_side: ["52", "54", "53"],
            right_side: "r38",
        },
        R49: {
            left_side: ["r2", "25", "57"],
            right_side: "r39",
        },
        R50: {
            left_side: ["r35"],
            right_side: "r40",
        },
        R51: {
            left_side: ["r2", "14", "2"],
            right_side: "r41",
        },
        R52: {
            left_side: ["7"],
            right_side: "r42",
        },
        R53: {
            left_side: ["20"],
            right_side: "r43",
        },
        R54: {
            left_side: ["21"],
            right_side: "r43",
        },
        R55: {
            left_side: ["r2", "32"],
            right_side: "r44",
        },
        R56: {
            left_side: ["r10", "r43"],
            right_side: "r45",
        },
        R57: {
            left_side: ["8", "25"],
            right_side: "r46",
        },
    },

    results: {
        "r1 ": {
            disease_name: "The end of flower rot",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        "r2 ": {
            disease_name: "Sulfur deficiency",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        "r3 ": {
            disease_name: "Nitrogen deficiency",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        "r4 ": {
            disease_name: "Iron deficiency",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        "r5 ": {
            disease_name: "Magnesium deficiency",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        "r6 ": {
            disease_name: "phosphorous deficiency",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        "r7 ": {
            disease_name: "Potassium deficiency",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        "r8 ": {
            disease_name: "Calcium deficiency",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        "r9 ": {
            disease_name: "Boron deficiency",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r10: {
            disease_name: "Alternar spot",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r11: {
            disease_name: "Manganese deficiency",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r12: {
            disease_name: "Screw head spots",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r13: {
            disease_name: "black mold",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r14: {
            disease_name: "Downy whiteness",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r15: {
            disease_name: "gray mold",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r16: {
            disease_name: "gum blight",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r17: {
            disease_name: "powdery mildew",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r18: {
            disease_name: "root rot",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r19: {
            disease_name: "wilt diseases",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r20: {
            disease_name: "irregular irrigation",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r21: {
            disease_name: "bean rust",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r22: {
            disease_name: "Late seminar",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r23: {
            disease_name: "anthracnose",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r24: {
            disease_name: "white leg rot",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r25: {
            disease_name: "leaf mosaic virus",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r26: {
            disease_name: "Bacterial spot",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r27: {
            disease_name: "bacterial ulcer",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r28: {
            disease_name: "spiders",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r29: {
            disease_name: "Manna",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r30: {
            disease_name: "cotton paper worm",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r31: {
            disease_name: "Cutworm",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r32: {
            disease_name: "digger",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r33: {
            disease_name: "tunnel makers",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r34: {
            disease_name: "whitefly",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r35: {
            disease_name: "نقص في النحاس",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r36: {
            disease_name: "zinc deficiency",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r37: {
            disease_name: "Molybdenum deficiency",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r38: {
            disease_name: "Cucurbit fruit fly",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r39: {
            disease_name: "nematodes",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r40: {
            disease_name: "thirst",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r41: {
            disease_name: "increase irrigation",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r42: {
            disease_name: "frost",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r43: {
            disease_name: "sun sting",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r44: {
            disease_name: "increased salinity",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r45: {
            disease_name: "early seminar",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
        r46: {
            disease_name: "chemical injury",
            "tips_and guidance": ["1", "2", "3"],
            img_src: "",
        },
    },
};
