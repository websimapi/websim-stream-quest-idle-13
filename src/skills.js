export const SKILLS = {
    woodcutting: {
        id: 'woodcutting',
        name: 'Woodcutting',
        description: 'Chop trees to gather logs for construction and firemaking.',
        icon: 'woodcutting_icon.png',
        tasks: [
            // 🌱 BEGINNER TIER (Level 1–10)
            { 
                id: 'wc_birch', 
                name: 'Chop Birch', 
                level: 1, 
                duration: 3000,  // 3s
                xp: 5,
                reward: {
                    type: 'quantity',
                    itemId: 'log_birch',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_pine', 
                name: 'Chop Pine', 
                level: 2, 
                duration: 3500, // 3.5s
                xp: 6,
                reward: {
                    type: 'quantity',
                    itemId: 'log_pine',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_willow', 
                name: 'Chop Willow', 
                level: 3, 
                duration: 4000, // 4s
                xp: 8,
                reward: {
                    type: 'quantity',
                    itemId: 'log_willow',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_poplar', 
                name: 'Chop Poplar', 
                level: 4, 
                duration: 4500, // 4.5s
                xp: 10,
                reward: {
                    type: 'quantity',
                    itemId: 'log_poplar',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_alder', 
                name: 'Chop Alder', 
                level: 6, 
                duration: 5000, // 5s
                xp: 15,
                reward: {
                    type: 'quantity',
                    itemId: 'log_alder',
                    min: 1,
                    max: 3
                }
            },

            // 🌳 INTERMEDIATE TIER (Level 11–20)
            { 
                id: 'wc_maple', 
                name: 'Chop Maple', 
                level: 12, 
                duration: 6000, // 6s
                xp: 25,
                reward: {
                    type: 'quantity',
                    itemId: 'log_maple',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_cedar', 
                name: 'Chop Cedar', 
                level: 14, 
                duration: 6500, // 6.5s
                xp: 30,
                reward: {
                    type: 'quantity',
                    itemId: 'log_cedar',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_elm', 
                name: 'Chop Elm', 
                level: 16, 
                duration: 7000, // 7s
                xp: 35,
                reward: {
                    type: 'quantity',
                    itemId: 'log_elm',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_chestnut', 
                name: 'Chop Chestnut', 
                level: 17, 
                duration: 7500, // 7.5s
                xp: 40,
                reward: {
                    type: 'quantity',
                    itemId: 'log_chestnut',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_beech', 
                name: 'Chop Beech', 
                level: 20, 
                duration: 8000, // 8s
                xp: 50,
                reward: {
                    type: 'quantity',
                    itemId: 'log_beech',
                    min: 1,
                    max: 3
                }
            },

            // 🪵 ADVANCED TIER (Level 21–35)
            { 
                id: 'wc_oak', 
                name: 'Chop Oak', 
                level: 21, 
                duration: 9000, // 9s
                xp: 60,
                reward: {
                    type: 'quantity',
                    itemId: 'log_oak',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_ash', 
                name: 'Chop Ash', 
                level: 23, 
                duration: 9500, // 9.5s
                xp: 70,
                reward: {
                    type: 'quantity',
                    itemId: 'log_ash',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_walnut', 
                name: 'Chop Walnut', 
                level: 25, 
                duration: 10000, // 10s
                xp: 85,
                reward: {
                    type: 'quantity',
                    itemId: 'log_walnut',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_sycamore', 
                name: 'Chop Sycamore', 
                level: 27, 
                duration: 11000, // 11s
                xp: 100,
                reward: {
                    type: 'quantity',
                    itemId: 'log_sycamore',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_hornbeam', 
                name: 'Chop Hornbeam', 
                level: 30, 
                duration: 12000, // 12s
                xp: 120,
                reward: {
                    type: 'quantity',
                    itemId: 'log_hornbeam',
                    min: 1,
                    max: 3
                }
            },

            // 🪓 EXPERT TIER (Level 36–50)
            { 
                id: 'wc_yew', 
                name: 'Chop Yew', 
                level: 36, 
                duration: 13000, // 13s
                xp: 150,
                reward: {
                    type: 'quantity',
                    itemId: 'log_yew',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_cherry', 
                name: 'Chop Cherry', 
                level: 38, 
                duration: 14000, // 14s
                xp: 180,
                reward: {
                    type: 'quantity',
                    itemId: 'log_cherry',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_ebony', 
                name: 'Chop Ebony', 
                level: 45, 
                duration: 16000, // 16s
                xp: 250,
                reward: {
                    type: 'quantity',
                    itemId: 'log_ebony',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_olive', 
                name: 'Chop Olive', 
                level: 48, 
                duration: 17000, // 17s
                xp: 300,
                reward: {
                    type: 'quantity',
                    itemId: 'log_olive',
                    min: 1,
                    max: 3
                }
            },

            // 🏆 LEGENDARY TIER (Level 50–80)
            { 
                id: 'wc_ironwood', 
                name: 'Chop Ironwood', 
                level: 55, 
                duration: 20000, // 20s
                xp: 400,
                reward: {
                    type: 'quantity',
                    itemId: 'log_ironwood',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_black_locust', 
                name: 'Chop Black Locust', 
                level: 58, 
                duration: 22000, // 22s
                xp: 475,
                reward: {
                    type: 'quantity',
                    itemId: 'log_black_locust',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_dragonfir', 
                name: 'Chop Dragonfir', 
                level: 65, 
                duration: 25000, // 25s
                xp: 600,
                reward: {
                    type: 'quantity',
                    itemId: 'log_dragonfir',
                    min: 1,
                    max: 3
                }
            },
            { 
                id: 'wc_world_oak', 
                name: 'Chop World Oak', 
                level: 75, 
                duration: 30000, // 30s
                xp: 800,
                reward: {
                    type: 'quantity',
                    itemId: 'log_world_oak',
                    min: 1,
                    max: 3
                }
            }
        ]
    },
    scavenging: {
        id: 'scavenging',
        name: 'Scavenging',
        description: 'Search through wastelands for valuable scrap and components.',
        icon: 'scavenging_icon.png',
        tasks: [
            // 🌱 BEGINNER TIER (Level 1–10)
            {
                id: 'sc_trash',
                name: 'Sift Trash',
                level: 1,
                duration: 3000,
                xp: 5,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'scrap_metal', name: 'Scrap Metal', chance: 0.8, min: 1, max: 3 },
                        { itemId: 'torn_cloth', name: 'Torn Cloth', chance: 0.5, min: 1, max: 2 },
                        { itemId: 'bottle_caps', name: 'Bottle Caps', chance: 0.4, min: 1, max: 5 }
                    ]
                }
            },
            {
                id: 'sc_loose_scrap',
                name: 'Collect Loose Scrap',
                level: 2,
                duration: 3500,
                xp: 6,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'scrap_metal', name: 'Scrap Metal', chance: 0.85, min: 1, max: 4 },
                        { itemId: 'bottle_caps', name: 'Bottle Caps', chance: 0.35, min: 1, max: 4 }
                    ]
                }
            },
            {
                id: 'sc_debris',
                name: 'Pick Through Debris',
                level: 3,
                duration: 4000,
                xp: 8,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'scrap_metal', name: 'Scrap Metal', chance: 0.8, min: 1, max: 4 },
                        { itemId: 'torn_cloth', name: 'Torn Cloth', chance: 0.45, min: 1, max: 3 }
                    ]
                }
            },
            {
                id: 'sc_abandoned_camps',
                name: 'Search Abandoned Camps',
                level: 5,
                duration: 5000,
                xp: 12,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'torn_cloth', name: 'Torn Cloth', chance: 0.7, min: 1, max: 3 },
                        { itemId: 'bottle_caps', name: 'Bottle Caps', chance: 0.6, min: 2, max: 6 },
                        { itemId: 'old_gears', name: 'Old Gears', chance: 0.25, min: 1, max: 2 }
                    ]
                }
            },
            {
                id: 'sc_rusted_metal',
                name: 'Harvest Rusted Metal',
                level: 8,
                duration: 6000,
                xp: 18,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'scrap_metal', name: 'Scrap Metal', chance: 0.9, min: 2, max: 5 },
                        { itemId: 'ancient_scrap', name: 'Ancient Scrap', chance: 0.2, min: 1, max: 1 }
                    ]
                }
            },

            // 🌳 INTERMEDIATE TIER (Level 11–25)
            {
                id: 'sc_rubble',
                name: 'Sort Construction Rubble',
                level: 12,
                duration: 7000,
                xp: 25,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'scrap_metal', name: 'Scrap Metal', chance: 0.85, min: 2, max: 5 },
                        { itemId: 'ancient_scrap', name: 'Ancient Scrap', chance: 0.25, min: 1, max: 2 }
                    ]
                }
            },
            {
                id: 'sc_old_tools',
                name: 'Scavenge Old Tools',
                level: 14,
                duration: 7500,
                xp: 28,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'old_gears', name: 'Old Gears', chance: 0.6, min: 1, max: 3 },
                        { itemId: 'scrap_metal', name: 'Scrap Metal', chance: 0.7, min: 1, max: 4 }
                    ]
                }
            },
            {
                id: 'sc_furniture',
                name: 'Strip Furniture Frames',
                level: 15,
                duration: 8000,
                xp: 30,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'scrap_metal', name: 'Scrap Metal', chance: 0.75, min: 1, max: 4 },
                        { itemId: 'torn_cloth', name: 'Torn Cloth', chance: 0.5, min: 1, max: 3 }
                    ]
                }
            },
            {
                id: 'sc_outposts',
                name: 'Search Deserted Outposts',
                level: 18,
                duration: 9000,
                xp: 40,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'scrap_metal', name: 'Scrap Metal', chance: 0.7, min: 2, max: 5 },
                        { itemId: 'ancient_scrap', name: 'Ancient Scrap', chance: 0.35, min: 1, max: 2 },
                        { itemId: 'mysterious_orb', name: 'Mysterious Orb', chance: 0.08, min: 1, max: 1 }
                    ]
                }
            },
            {
                id: 'sc_appliances',
                name: 'Dismantle Small Appliances',
                level: 20,
                duration: 10000,
                xp: 50,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'circuit_board', name: 'Circuit Board', chance: 0.65, min: 1, max: 2 },
                        { itemId: 'broken_chip', name: 'Broken Chip', chance: 0.6, min: 1, max: 4 }
                    ]
                }
            },
            {
                id: 'sc_barricades',
                name: 'Tear Down Barricades',
                level: 22,
                duration: 11000,
                xp: 55,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'scrap_metal', name: 'Scrap Metal', chance: 0.85, min: 3, max: 6 },
                        { itemId: 'ancient_scrap', name: 'Ancient Scrap', chance: 0.3, min: 1, max: 2 }
                    ]
                }
            },

            // 🪵 ADVANCED TIER (Level 26–40)
            {
                id: 'sc_ruins',
                name: 'Explore Ruins',
                level: 30,
                duration: 10000,
                xp: 65,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'ancient_scrap', name: 'Ancient Scrap', chance: 0.6, min: 1, max: 3 },
                        { itemId: 'old_gears', name: 'Old Gears', chance: 0.5, min: 1, max: 3 },
                        { itemId: 'mysterious_orb', name: 'Mysterious Orb', chance: 0.15, min: 1, max: 1 }
                    ]
                }
            },
            {
                id: 'sc_vehicles',
                name: 'Dismantle Vehicles',
                level: 32,
                duration: 12000,
                xp: 75,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'scrap_metal', name: 'Scrap Metal', chance: 0.8, min: 3, max: 7 },
                        { itemId: 'old_gears', name: 'Old Gears', chance: 0.55, min: 1, max: 3 },
                        { itemId: 'circuit_board', name: 'Circuit Board', chance: 0.25, min: 1, max: 2 }
                    ]
                }
            },
            {
                id: 'sc_industrial',
                name: 'Strip Industrial Scrap',
                level: 34,
                duration: 13000,
                xp: 90,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'scrap_metal', name: 'Scrap Metal', chance: 0.85, min: 3, max: 7 },
                        { itemId: 'ancient_scrap', name: 'Ancient Scrap', chance: 0.45, min: 1, max: 3 }
                    ]
                }
            },
            {
                id: 'sc_cores',
                name: 'Salvage Machinery Cores',
                level: 37,
                duration: 14000,
                xp: 120,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'circuit_board', name: 'Circuit Board', chance: 0.65, min: 1, max: 2 },
                        { itemId: 'power_core', name: 'Power Core', chance: 0.3, min: 1, max: 1 },
                        { itemId: 'broken_chip', name: 'Broken Chip', chance: 0.5, min: 1, max: 4 }
                    ]
                }
            },
            {
                id: 'sc_cargo',
                name: 'Break Open Cargo Containers',
                level: 40,
                duration: 15000,
                xp: 150,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'scrap_metal', name: 'Scrap Metal', chance: 0.7, min: 3, max: 8 },
                        { itemId: 'power_core', name: 'Power Core', chance: 0.25, min: 1, max: 2 },
                        { itemId: 'mysterious_orb', name: 'Mysterious Orb', chance: 0.15, min: 1, max: 1 }
                    ]
                }
            },

            // 🛠️ EXPERT TIER (Level 41–60)
            {
                id: 'sc_power_cells',
                name: 'Extract Power Cells',
                level: 42,
                duration: 16000,
                xp: 170,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'power_core', name: 'Power Core', chance: 0.4, min: 1, max: 2 },
                        { itemId: 'circuit_board', name: 'Circuit Board', chance: 0.5, min: 1, max: 2 }
                    ]
                }
            },
            {
                id: 'sc_drones',
                name: 'Recover Drone Parts',
                level: 45,
                duration: 17000,
                xp: 200,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'drone_parts', name: 'Drone Parts', chance: 0.65, min: 1, max: 3 },
                        { itemId: 'circuit_board', name: 'Circuit Board', chance: 0.45, min: 1, max: 2 }
                    ]
                }
            },
            {
                id: 'sc_tech',
                name: 'Salvage Tech',
                level: 50,
                duration: 20000,
                xp: 80,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'circuit_board', name: 'Circuit Board', chance: 0.65, min: 1, max: 2 },
                        { itemId: 'power_core', name: 'Power Core', chance: 0.25, min: 1, max: 1 },
                        { itemId: 'broken_chip', name: 'Broken Chip', chance: 0.5, min: 1, max: 4 }
                    ]
                }
            },
            {
                id: 'sc_mech',
                name: 'Disassemble Mech Frames',
                level: 55,
                duration: 22000,
                xp: 260,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'mech_plating', name: 'Mech Plating', chance: 0.6, min: 1, max: 3 },
                        { itemId: 'scrap_metal', name: 'Scrap Metal', chance: 0.7, min: 3, max: 8 },
                        { itemId: 'power_core', name: 'Power Core', chance: 0.2, min: 1, max: 1 }
                    ]
                }
            },
            {
                id: 'sc_lab',
                name: 'Strip Laboratory Consoles',
                level: 58,
                duration: 23000,
                xp: 300,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'lab_components', name: 'Lab Components', chance: 0.6, min: 1, max: 3 },
                        { itemId: 'circuit_board', name: 'Circuit Board', chance: 0.5, min: 1, max: 2 },
                        { itemId: 'mysterious_orb', name: 'Mysterious Orb', chance: 0.1, min: 1, max: 1 }
                    ]
                }
            },

            // 🏆 LEGENDARY TIER (Level 60–80)
            {
                id: 'sc_quantum',
                name: 'Extract Quantum Components',
                level: 62,
                duration: 24000,
                xp: 350,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'quantum_components', name: 'Quantum Components', chance: 0.55, min: 1, max: 2 },
                        { itemId: 'power_core', name: 'Power Core', chance: 0.3, min: 1, max: 2 }
                    ]
                }
            },
            {
                id: 'sc_automatons',
                name: 'Disassemble Ancient Automatons',
                level: 70,
                duration: 26000,
                xp: 500,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'automaton_core', name: 'Automaton Core', chance: 0.6, min: 1, max: 2 },
                        { itemId: 'ancient_scrap', name: 'Ancient Scrap', chance: 0.45, min: 1, max: 3 }
                    ]
                }
            },
            {
                id: 'sc_research',
                name: 'Raid Fallen Research Sites',
                level: 75,
                duration: 28000,
                xp: 650,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'research_data', name: 'Research Data Cache', chance: 0.55, min: 1, max: 2 },
                        { itemId: 'mysterious_orb', name: 'Mysterious Orb', chance: 0.2, min: 1, max: 1 },
                        { itemId: 'circuit_board', name: 'Circuit Board', chance: 0.4, min: 1, max: 3 }
                    ]
                }
            },
            {
                id: 'sc_star_tech',
                name: 'Harvest Star-Era Tech',
                level: 80,
                duration: 30000,
                xp: 900,
                reward: {
                    type: 'lootTable',
                    table: [
                        { itemId: 'star_tech', name: 'Star-Era Tech Relic', chance: 0.6, min: 1, max: 1 },
                        { itemId: 'quantum_components', name: 'Quantum Components', chance: 0.5, min: 1, max: 2 },
                        { itemId: 'power_core', name: 'Power Core', chance: 0.35, min: 1, max: 2 },
                        { itemId: 'mysterious_orb', name: 'Mysterious Orb', chance: 0.15, min: 1, max: 1 }
                    ]
                }
            }
        ]
    },
    fishing: {
        id: 'fishing',
        name: 'Fishing',
        description: 'Cast your line to catch fish for food and trade.',
        icon: 'fishing_icon.png',
        tasks: [
            { 
                id: 'fi_shrimp', 
                name: 'Net Shrimp', 
                level: 1, 
                duration: 4000, 
                xp: 8,
                reward: {
                    type: 'quantity',
                    itemId: 'fish_shrimp',
                    min: 1,
                    max: 20
                }
            },
            { 
                id: 'fi_trout', 
                name: 'Lure Trout', 
                level: 20, 
                duration: 9000, 
                xp: 35,
                reward: {
                    type: 'quantity',
                    itemId: 'fish_trout',
                    min: 1,
                    max: 1
                }
            },
            { 
                id: 'fi_shark', 
                name: 'Harpoon Shark', 
                level: 70, 
                duration: 15000, 
                xp: 100,
                reward: {
                    type: 'quantity',
                    itemId: 'fish_shark',
                    min: 1,
                    max: 1
                }
            }
        ]
    }
};