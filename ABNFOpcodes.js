/********************************************************************
APG - an ABNF Parser Generator
Copyright (C) 2009 Coast to Coast Research, Inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see
<http://www.gnu.org/licenses/old-licenses/gpl-2.0.html>
or write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.

author: Lowell Thomas
lowell@coasttocoastresearch.com
http://www.coasttocoastresearch.com

*********************************************************************/
function ABNFOpcodes()
{
    // SUMMARY
    // string table length: 418
    //               rules: 34
    //             opcodes: 301

    // string table
    this.stringTable = [];
    this.stringTable[0] = 47;
    this.stringTable[1] = 47;
    this.stringTable[2] = 94;
    this.stringTable[3] = 36;
    this.stringTable[4] = 105;
    this.stringTable[5] = 109;
    this.stringTable[6] = 115;
    this.stringTable[7] = 120;
    this.stringTable[8] = 101;
    this.stringTable[9] = 65;
    this.stringTable[10] = 68;
    this.stringTable[11] = 83;
    this.stringTable[12] = 85;
    this.stringTable[13] = 88;
    this.stringTable[14] = 106;
    this.stringTable[15] = 117;
    this.stringTable[16] = 124;
    this.stringTable[17] = 40;
    this.stringTable[18] = 41;
    this.stringTable[19] = 63;
    this.stringTable[20] = 58;
    this.stringTable[21] = 124;
    this.stringTable[22] = 61;
    this.stringTable[23] = 33;
    this.stringTable[24] = 60;
    this.stringTable[25] = 61;
    this.stringTable[26] = 60;
    this.stringTable[27] = 33;
    this.stringTable[28] = 62;
    this.stringTable[29] = 35;
    this.stringTable[30] = 80;
    this.stringTable[31] = 60;
    this.stringTable[32] = 62;
    this.stringTable[33] = 80;
    this.stringTable[34] = 39;
    this.stringTable[35] = 39;
    this.stringTable[36] = 91;
    this.stringTable[37] = 93;
    this.stringTable[38] = 94;
    this.stringTable[39] = 46;
    this.stringTable[40] = 92;
    this.stringTable[41] = 100;
    this.stringTable[42] = 92;
    this.stringTable[43] = 68;
    this.stringTable[44] = 92;
    this.stringTable[45] = 104;
    this.stringTable[46] = 92;
    this.stringTable[47] = 72;
    this.stringTable[48] = 92;
    this.stringTable[49] = 115;
    this.stringTable[50] = 92;
    this.stringTable[51] = 83;
    this.stringTable[52] = 92;
    this.stringTable[53] = 118;
    this.stringTable[54] = 92;
    this.stringTable[55] = 86;
    this.stringTable[56] = 92;
    this.stringTable[57] = 119;
    this.stringTable[58] = 92;
    this.stringTable[59] = 87;
    this.stringTable[60] = 91;
    this.stringTable[61] = 58;
    this.stringTable[62] = 97;
    this.stringTable[63] = 108;
    this.stringTable[64] = 110;
    this.stringTable[65] = 117;
    this.stringTable[66] = 109;
    this.stringTable[67] = 58;
    this.stringTable[68] = 93;
    this.stringTable[69] = 91;
    this.stringTable[70] = 58;
    this.stringTable[71] = 97;
    this.stringTable[72] = 108;
    this.stringTable[73] = 112;
    this.stringTable[74] = 104;
    this.stringTable[75] = 97;
    this.stringTable[76] = 58;
    this.stringTable[77] = 93;
    this.stringTable[78] = 91;
    this.stringTable[79] = 58;
    this.stringTable[80] = 97;
    this.stringTable[81] = 115;
    this.stringTable[82] = 99;
    this.stringTable[83] = 105;
    this.stringTable[84] = 105;
    this.stringTable[85] = 58;
    this.stringTable[86] = 93;
    this.stringTable[87] = 91;
    this.stringTable[88] = 58;
    this.stringTable[89] = 98;
    this.stringTable[90] = 108;
    this.stringTable[91] = 97;
    this.stringTable[92] = 110;
    this.stringTable[93] = 107;
    this.stringTable[94] = 58;
    this.stringTable[95] = 93;
    this.stringTable[96] = 91;
    this.stringTable[97] = 58;
    this.stringTable[98] = 99;
    this.stringTable[99] = 110;
    this.stringTable[100] = 116;
    this.stringTable[101] = 114;
    this.stringTable[102] = 108;
    this.stringTable[103] = 58;
    this.stringTable[104] = 93;
    this.stringTable[105] = 91;
    this.stringTable[106] = 58;
    this.stringTable[107] = 100;
    this.stringTable[108] = 105;
    this.stringTable[109] = 103;
    this.stringTable[110] = 105;
    this.stringTable[111] = 116;
    this.stringTable[112] = 58;
    this.stringTable[113] = 93;
    this.stringTable[114] = 91;
    this.stringTable[115] = 58;
    this.stringTable[116] = 103;
    this.stringTable[117] = 114;
    this.stringTable[118] = 97;
    this.stringTable[119] = 112;
    this.stringTable[120] = 104;
    this.stringTable[121] = 58;
    this.stringTable[122] = 93;
    this.stringTable[123] = 91;
    this.stringTable[124] = 58;
    this.stringTable[125] = 108;
    this.stringTable[126] = 111;
    this.stringTable[127] = 119;
    this.stringTable[128] = 101;
    this.stringTable[129] = 114;
    this.stringTable[130] = 58;
    this.stringTable[131] = 93;
    this.stringTable[132] = 91;
    this.stringTable[133] = 58;
    this.stringTable[134] = 112;
    this.stringTable[135] = 114;
    this.stringTable[136] = 105;
    this.stringTable[137] = 110;
    this.stringTable[138] = 116;
    this.stringTable[139] = 58;
    this.stringTable[140] = 93;
    this.stringTable[141] = 91;
    this.stringTable[142] = 58;
    this.stringTable[143] = 112;
    this.stringTable[144] = 117;
    this.stringTable[145] = 110;
    this.stringTable[146] = 99;
    this.stringTable[147] = 116;
    this.stringTable[148] = 58;
    this.stringTable[149] = 93;
    this.stringTable[150] = 91;
    this.stringTable[151] = 58;
    this.stringTable[152] = 115;
    this.stringTable[153] = 112;
    this.stringTable[154] = 97;
    this.stringTable[155] = 99;
    this.stringTable[156] = 101;
    this.stringTable[157] = 58;
    this.stringTable[158] = 93;
    this.stringTable[159] = 91;
    this.stringTable[160] = 58;
    this.stringTable[161] = 117;
    this.stringTable[162] = 112;
    this.stringTable[163] = 112;
    this.stringTable[164] = 101;
    this.stringTable[165] = 114;
    this.stringTable[166] = 58;
    this.stringTable[167] = 93;
    this.stringTable[168] = 91;
    this.stringTable[169] = 58;
    this.stringTable[170] = 119;
    this.stringTable[171] = 111;
    this.stringTable[172] = 114;
    this.stringTable[173] = 100;
    this.stringTable[174] = 58;
    this.stringTable[175] = 93;
    this.stringTable[176] = 91;
    this.stringTable[177] = 58;
    this.stringTable[178] = 120;
    this.stringTable[179] = 100;
    this.stringTable[180] = 105;
    this.stringTable[181] = 103;
    this.stringTable[182] = 105;
    this.stringTable[183] = 116;
    this.stringTable[184] = 58;
    this.stringTable[185] = 93;
    this.stringTable[186] = 91;
    this.stringTable[187] = 58;
    this.stringTable[188] = 94;
    this.stringTable[189] = 97;
    this.stringTable[190] = 108;
    this.stringTable[191] = 110;
    this.stringTable[192] = 117;
    this.stringTable[193] = 109;
    this.stringTable[194] = 58;
    this.stringTable[195] = 93;
    this.stringTable[196] = 91;
    this.stringTable[197] = 58;
    this.stringTable[198] = 94;
    this.stringTable[199] = 97;
    this.stringTable[200] = 108;
    this.stringTable[201] = 112;
    this.stringTable[202] = 104;
    this.stringTable[203] = 97;
    this.stringTable[204] = 58;
    this.stringTable[205] = 93;
    this.stringTable[206] = 91;
    this.stringTable[207] = 58;
    this.stringTable[208] = 94;
    this.stringTable[209] = 97;
    this.stringTable[210] = 115;
    this.stringTable[211] = 99;
    this.stringTable[212] = 105;
    this.stringTable[213] = 105;
    this.stringTable[214] = 58;
    this.stringTable[215] = 93;
    this.stringTable[216] = 91;
    this.stringTable[217] = 58;
    this.stringTable[218] = 94;
    this.stringTable[219] = 98;
    this.stringTable[220] = 108;
    this.stringTable[221] = 97;
    this.stringTable[222] = 110;
    this.stringTable[223] = 107;
    this.stringTable[224] = 58;
    this.stringTable[225] = 93;
    this.stringTable[226] = 91;
    this.stringTable[227] = 58;
    this.stringTable[228] = 94;
    this.stringTable[229] = 99;
    this.stringTable[230] = 110;
    this.stringTable[231] = 116;
    this.stringTable[232] = 114;
    this.stringTable[233] = 108;
    this.stringTable[234] = 58;
    this.stringTable[235] = 93;
    this.stringTable[236] = 91;
    this.stringTable[237] = 58;
    this.stringTable[238] = 94;
    this.stringTable[239] = 100;
    this.stringTable[240] = 105;
    this.stringTable[241] = 103;
    this.stringTable[242] = 105;
    this.stringTable[243] = 116;
    this.stringTable[244] = 58;
    this.stringTable[245] = 93;
    this.stringTable[246] = 91;
    this.stringTable[247] = 58;
    this.stringTable[248] = 94;
    this.stringTable[249] = 103;
    this.stringTable[250] = 114;
    this.stringTable[251] = 97;
    this.stringTable[252] = 112;
    this.stringTable[253] = 104;
    this.stringTable[254] = 58;
    this.stringTable[255] = 93;
    this.stringTable[256] = 91;
    this.stringTable[257] = 58;
    this.stringTable[258] = 94;
    this.stringTable[259] = 108;
    this.stringTable[260] = 111;
    this.stringTable[261] = 119;
    this.stringTable[262] = 101;
    this.stringTable[263] = 114;
    this.stringTable[264] = 58;
    this.stringTable[265] = 93;
    this.stringTable[266] = 91;
    this.stringTable[267] = 58;
    this.stringTable[268] = 94;
    this.stringTable[269] = 112;
    this.stringTable[270] = 114;
    this.stringTable[271] = 105;
    this.stringTable[272] = 110;
    this.stringTable[273] = 116;
    this.stringTable[274] = 58;
    this.stringTable[275] = 93;
    this.stringTable[276] = 91;
    this.stringTable[277] = 58;
    this.stringTable[278] = 94;
    this.stringTable[279] = 112;
    this.stringTable[280] = 117;
    this.stringTable[281] = 110;
    this.stringTable[282] = 99;
    this.stringTable[283] = 116;
    this.stringTable[284] = 58;
    this.stringTable[285] = 93;
    this.stringTable[286] = 91;
    this.stringTable[287] = 58;
    this.stringTable[288] = 94;
    this.stringTable[289] = 115;
    this.stringTable[290] = 112;
    this.stringTable[291] = 97;
    this.stringTable[292] = 99;
    this.stringTable[293] = 101;
    this.stringTable[294] = 58;
    this.stringTable[295] = 93;
    this.stringTable[296] = 91;
    this.stringTable[297] = 58;
    this.stringTable[298] = 94;
    this.stringTable[299] = 117;
    this.stringTable[300] = 112;
    this.stringTable[301] = 112;
    this.stringTable[302] = 101;
    this.stringTable[303] = 114;
    this.stringTable[304] = 58;
    this.stringTable[305] = 93;
    this.stringTable[306] = 91;
    this.stringTable[307] = 58;
    this.stringTable[308] = 94;
    this.stringTable[309] = 119;
    this.stringTable[310] = 111;
    this.stringTable[311] = 114;
    this.stringTable[312] = 100;
    this.stringTable[313] = 58;
    this.stringTable[314] = 93;
    this.stringTable[315] = 91;
    this.stringTable[316] = 58;
    this.stringTable[317] = 94;
    this.stringTable[318] = 120;
    this.stringTable[319] = 100;
    this.stringTable[320] = 105;
    this.stringTable[321] = 103;
    this.stringTable[322] = 105;
    this.stringTable[323] = 116;
    this.stringTable[324] = 58;
    this.stringTable[325] = 93;
    this.stringTable[326] = 45;
    this.stringTable[327] = 63;
    this.stringTable[328] = 42;
    this.stringTable[329] = 43;
    this.stringTable[330] = 63;
    this.stringTable[331] = 43;
    this.stringTable[332] = 123;
    this.stringTable[333] = 44;
    this.stringTable[334] = 125;
    this.stringTable[335] = 92;
    this.stringTable[336] = 97;
    this.stringTable[337] = 101;
    this.stringTable[338] = 102;
    this.stringTable[339] = 110;
    this.stringTable[340] = 114;
    this.stringTable[341] = 116;
    this.stringTable[342] = 99;
    this.stringTable[343] = 120;
    this.stringTable[344] = 120;
    this.stringTable[345] = 92;
    this.stringTable[346] = 97;
    this.stringTable[347] = 101;
    this.stringTable[348] = 102;
    this.stringTable[349] = 110;
    this.stringTable[350] = 114;
    this.stringTable[351] = 116;
    this.stringTable[352] = 99;
    this.stringTable[353] = 120;
    this.stringTable[354] = 120;
    this.stringTable[355] = 35;
    this.stringTable[356] = 37;
    this.stringTable[357] = 38;
    this.stringTable[358] = 33;
    this.stringTable[359] = 39;
    this.stringTable[360] = 44;
    this.stringTable[361] = 45;
    this.stringTable[362] = 58;
    this.stringTable[363] = 59;
    this.stringTable[364] = 60;
    this.stringTable[365] = 61;
    this.stringTable[366] = 62;
    this.stringTable[367] = 64;
    this.stringTable[368] = 95;
    this.stringTable[369] = 96;
    this.stringTable[370] = 126;
    this.stringTable[371] = 123;
    this.stringTable[372] = 125;
    this.stringTable[373] = 40;
    this.stringTable[374] = 41;
    this.stringTable[375] = 36;
    this.stringTable[376] = 43;
    this.stringTable[377] = 42;
    this.stringTable[378] = 63;
    this.stringTable[379] = 124;
    this.stringTable[380] = 35;
    this.stringTable[381] = 37;
    this.stringTable[382] = 38;
    this.stringTable[383] = 33;
    this.stringTable[384] = 39;
    this.stringTable[385] = 44;
    this.stringTable[386] = 58;
    this.stringTable[387] = 59;
    this.stringTable[388] = 60;
    this.stringTable[389] = 61;
    this.stringTable[390] = 62;
    this.stringTable[391] = 64;
    this.stringTable[392] = 95;
    this.stringTable[393] = 96;
    this.stringTable[394] = 126;
    this.stringTable[395] = 91;
    this.stringTable[396] = 92;
    this.stringTable[397] = 93;
    this.stringTable[398] = 94;
    this.stringTable[399] = 47;
    this.stringTable[400] = 123;
    this.stringTable[401] = 125;
    this.stringTable[402] = 40;
    this.stringTable[403] = 41;
    this.stringTable[404] = 63;
    this.stringTable[405] = 43;
    this.stringTable[406] = 42;
    this.stringTable[407] = 124;
    this.stringTable[408] = 46;
    this.stringTable[409] = 94;
    this.stringTable[410] = 36;
    this.stringTable[411] = 32;
    this.stringTable[412] = 45;
    this.stringTable[413] = 91;
    this.stringTable[414] = 92;
    this.stringTable[415] = 93;
    this.stringTable[416] = 94;
    this.stringTable[417] = 32;

    // rule identifiers
    this.ruleIds = [];
    this.ruleIds.regexpliteral = 0;
    this.ruleIds.regexpatstart = 1;
    this.ruleIds.regexpatend = 2;
    this.ruleIds.regexpoptions = 3;
    this.ruleIds.regexpalternative = 4;
    this.ruleIds.regexpsequence = 5;
    this.ruleIds.regexpfactorword = 6;
    this.ruleIds.regexpgroup = 7;
    this.ruleIds.regexpgroupcapture = 8;
    this.ruleIds.regexpnamedgroup = 9;
    this.ruleIds.regexpgroupname = 10;
    this.ruleIds.regexpclass = 11;
    this.ruleIds.regexpclassnegative = 12;
    this.ruleIds.regexppredifinedclass = 13;
    this.ruleIds.regexpcharrange = 14;
    this.ruleIds.regexpcharstart = 15;
    this.ruleIds.regexpcharend = 16;
    this.ruleIds.regexpclassword = 17;
    this.ruleIds.regexpquantifier = 18;
    this.ruleIds.regexpquantifiersinglechar = 19;
    this.ruleIds.regexpquantifiergreed = 20;
    this.ruleIds.regexpquantifierrange = 21;
    this.ruleIds.regexpclassescape = 22;
    this.ruleIds.regexpescape = 23;
    this.ruleIds.charfactor = 24;
    this.ruleIds.charclass = 25;
    this.ruleIds.charspecialfactor = 26;
    this.ruleIds.charspecial = 27;
    this.ruleIds.min = 28;
    this.ruleIds.max = 29;
    this.ruleIds.hexdig = 30;
    this.ruleIds.digit = 31;
    this.ruleIds.octal = 32;
    this.ruleIds.alpha = 33;

    // rule identifiers (alphabetical)
    this.ruleIds[0] = 33; // ALPHA
    this.ruleIds[1] = 25; // charclass
    this.ruleIds[2] = 24; // charfactor
    this.ruleIds[3] = 27; // charspecial
    this.ruleIds[4] = 26; // charspecialfactor
    this.ruleIds[5] = 31; // DIGIT
    this.ruleIds[6] = 30; // HEXDIG
    this.ruleIds[7] = 29; // max
    this.ruleIds[8] = 28; // min
    this.ruleIds[9] = 32; // OCTAL
    this.ruleIds[10] = 4; // regexpalternative
    this.ruleIds[11] = 2; // regexpatend
    this.ruleIds[12] = 1; // regexpatstart
    this.ruleIds[13] = 16; // regexpcharend
    this.ruleIds[14] = 14; // regexpcharrange
    this.ruleIds[15] = 15; // regexpcharstart
    this.ruleIds[16] = 11; // regexpclass
    this.ruleIds[17] = 22; // regexpclassescape
    this.ruleIds[18] = 12; // regexpclassnegative
    this.ruleIds[19] = 17; // regexpclassword
    this.ruleIds[20] = 23; // regexpescape
    this.ruleIds[21] = 6; // regexpfactorword
    this.ruleIds[22] = 7; // regexpgroup
    this.ruleIds[23] = 8; // regexpgroupcapture
    this.ruleIds[24] = 10; // regexpgroupname
    this.ruleIds[25] = 0; // regexpliteral
    this.ruleIds[26] = 9; // regexpnamedgroup
    this.ruleIds[27] = 3; // regexpoptions
    this.ruleIds[28] = 13; // regexppredifinedclass
    this.ruleIds[29] = 18; // regexpquantifier
    this.ruleIds[30] = 20; // regexpquantifiergreed
    this.ruleIds[31] = 21; // regexpquantifierrange
    this.ruleIds[32] = 19; // regexpquantifiersinglechar
    this.ruleIds[33] = 5; // regexpsequence

    // rules
    this.rules = [];
    this.rules[0] = [];
    this.rules[0].rule = 'regexpliteral';
    this.rules[0].lower = 'regexpliteral';
    this.rules[0].syntax = null;
    this.rules[0].semantic = null;
    this.rules[0].opcodeIndex = 0;

    this.rules[1] = [];
    this.rules[1].rule = 'regexpatstart';
    this.rules[1].lower = 'regexpatstart';
    this.rules[1].syntax = null;
    this.rules[1].semantic = null;
    this.rules[1].opcodeIndex = 13;

    this.rules[2] = [];
    this.rules[2].rule = 'regexpatend';
    this.rules[2].lower = 'regexpatend';
    this.rules[2].syntax = null;
    this.rules[2].semantic = null;
    this.rules[2].opcodeIndex = 14;

    this.rules[3] = [];
    this.rules[3].rule = 'regexpoptions';
    this.rules[3].lower = 'regexpoptions';
    this.rules[3].syntax = null;
    this.rules[3].semantic = null;
    this.rules[3].opcodeIndex = 15;

    this.rules[4] = [];
    this.rules[4].rule = 'regexpalternative';
    this.rules[4].lower = 'regexpalternative';
    this.rules[4].syntax = null;
    this.rules[4].semantic = null;
    this.rules[4].opcodeIndex = 29;

    this.rules[5] = [];
    this.rules[5].rule = 'regexpsequence';
    this.rules[5].lower = 'regexpsequence';
    this.rules[5].syntax = null;
    this.rules[5].semantic = null;
    this.rules[5].opcodeIndex = 30;

    this.rules[6] = [];
    this.rules[6].rule = 'regexpfactorword';
    this.rules[6].lower = 'regexpfactorword';
    this.rules[6].syntax = null;
    this.rules[6].semantic = null;
    this.rules[6].opcodeIndex = 38;

    this.rules[7] = [];
    this.rules[7].rule = 'regexpgroup';
    this.rules[7].lower = 'regexpgroup';
    this.rules[7].syntax = null;
    this.rules[7].semantic = null;
    this.rules[7].opcodeIndex = 42;

    this.rules[8] = [];
    this.rules[8].rule = 'regexpgroupcapture';
    this.rules[8].lower = 'regexpgroupcapture';
    this.rules[8].syntax = null;
    this.rules[8].semantic = null;
    this.rules[8].opcodeIndex = 52;

    this.rules[9] = [];
    this.rules[9].rule = 'regexpnamedgroup';
    this.rules[9].lower = 'regexpnamedgroup';
    this.rules[9].syntax = null;
    this.rules[9].semantic = null;
    this.rules[9].opcodeIndex = 65;

    this.rules[10] = [];
    this.rules[10].rule = 'regexpgroupname';
    this.rules[10].lower = 'regexpgroupname';
    this.rules[10].syntax = null;
    this.rules[10].semantic = null;
    this.rules[10].opcodeIndex = 76;

    this.rules[11] = [];
    this.rules[11].rule = 'regexpclass';
    this.rules[11].lower = 'regexpclass';
    this.rules[11].syntax = null;
    this.rules[11].semantic = null;
    this.rules[11].opcodeIndex = 80;

    this.rules[12] = [];
    this.rules[12].rule = 'regexpclassnegative';
    this.rules[12].lower = 'regexpclassnegative';
    this.rules[12].syntax = null;
    this.rules[12].semantic = null;
    this.rules[12].opcodeIndex = 92;

    this.rules[13] = [];
    this.rules[13].rule = 'regexppredifinedclass';
    this.rules[13].lower = 'regexppredifinedclass';
    this.rules[13].syntax = null;
    this.rules[13].semantic = null;
    this.rules[13].opcodeIndex = 93;

    this.rules[14] = [];
    this.rules[14].rule = 'regexpcharrange';
    this.rules[14].lower = 'regexpcharrange';
    this.rules[14].syntax = null;
    this.rules[14].semantic = null;
    this.rules[14].opcodeIndex = 133;

    this.rules[15] = [];
    this.rules[15].rule = 'regexpcharstart';
    this.rules[15].lower = 'regexpcharstart';
    this.rules[15].syntax = null;
    this.rules[15].semantic = null;
    this.rules[15].opcodeIndex = 137;

    this.rules[16] = [];
    this.rules[16].rule = 'regexpcharend';
    this.rules[16].lower = 'regexpcharend';
    this.rules[16].syntax = null;
    this.rules[16].semantic = null;
    this.rules[16].opcodeIndex = 140;

    this.rules[17] = [];
    this.rules[17].rule = 'regexpclassword';
    this.rules[17].lower = 'regexpclassword';
    this.rules[17].syntax = null;
    this.rules[17].semantic = null;
    this.rules[17].opcodeIndex = 143;

    this.rules[18] = [];
    this.rules[18].rule = 'regexpquantifier';
    this.rules[18].lower = 'regexpquantifier';
    this.rules[18].syntax = null;
    this.rules[18].semantic = null;
    this.rules[18].opcodeIndex = 147;

    this.rules[19] = [];
    this.rules[19].rule = 'regexpquantifiersinglechar';
    this.rules[19].lower = 'regexpquantifiersinglechar';
    this.rules[19].syntax = null;
    this.rules[19].semantic = null;
    this.rules[19].opcodeIndex = 152;

    this.rules[20] = [];
    this.rules[20].rule = 'regexpquantifiergreed';
    this.rules[20].lower = 'regexpquantifiergreed';
    this.rules[20].syntax = null;
    this.rules[20].semantic = null;
    this.rules[20].opcodeIndex = 156;

    this.rules[21] = [];
    this.rules[21].rule = 'regexpquantifierrange';
    this.rules[21].lower = 'regexpquantifierrange';
    this.rules[21].syntax = null;
    this.rules[21].semantic = null;
    this.rules[21].opcodeIndex = 160;

    this.rules[22] = [];
    this.rules[22].rule = 'regexpclassescape';
    this.rules[22].lower = 'regexpclassescape';
    this.rules[22].syntax = null;
    this.rules[22].semantic = null;
    this.rules[22].opcodeIndex = 169;

    this.rules[23] = [];
    this.rules[23].rule = 'regexpescape';
    this.rules[23].lower = 'regexpescape';
    this.rules[23].syntax = null;
    this.rules[23].semantic = null;
    this.rules[23].opcodeIndex = 192;

    this.rules[24] = [];
    this.rules[24].rule = 'charfactor';
    this.rules[24].lower = 'charfactor';
    this.rules[24].syntax = null;
    this.rules[24].semantic = null;
    this.rules[24].opcodeIndex = 215;

    this.rules[25] = [];
    this.rules[25].rule = 'charclass';
    this.rules[25].lower = 'charclass';
    this.rules[25].syntax = null;
    this.rules[25].semantic = null;
    this.rules[25].opcodeIndex = 235;

    this.rules[26] = [];
    this.rules[26].rule = 'charspecialfactor';
    this.rules[26].lower = 'charspecialfactor';
    this.rules[26].syntax = null;
    this.rules[26].semantic = null;
    this.rules[26].opcodeIndex = 263;

    this.rules[27] = [];
    this.rules[27].rule = 'charspecial';
    this.rules[27].lower = 'charspecial';
    this.rules[27].syntax = null;
    this.rules[27].semantic = null;
    this.rules[27].opcodeIndex = 281;

    this.rules[28] = [];
    this.rules[28].rule = 'min';
    this.rules[28].lower = 'min';
    this.rules[28].syntax = null;
    this.rules[28].semantic = null;
    this.rules[28].opcodeIndex = 288;

    this.rules[29] = [];
    this.rules[29].rule = 'max';
    this.rules[29].lower = 'max';
    this.rules[29].syntax = null;
    this.rules[29].semantic = null;
    this.rules[29].opcodeIndex = 290;

    this.rules[30] = [];
    this.rules[30].rule = 'HEXDIG';
    this.rules[30].lower = 'hexdig';
    this.rules[30].syntax = null;
    this.rules[30].semantic = null;
    this.rules[30].opcodeIndex = 292;

    this.rules[31] = [];
    this.rules[31].rule = 'DIGIT';
    this.rules[31].lower = 'digit';
    this.rules[31].syntax = null;
    this.rules[31].semantic = null;
    this.rules[31].opcodeIndex = 296;

    this.rules[32] = [];
    this.rules[32].rule = 'OCTAL';
    this.rules[32].lower = 'octal';
    this.rules[32].syntax = null;
    this.rules[32].semantic = null;
    this.rules[32].opcodeIndex = 297;

    this.rules[33] = [];
    this.rules[33].rule = 'ALPHA';
    this.rules[33].lower = 'alpha';
    this.rules[33].syntax = null;
    this.rules[33].semantic = null;
    this.rules[33].opcodeIndex = 298;

    // opcodes
    this.opcodes = [];
    this.opcodes[0] = [];
    this.opcodes[0].opNext = 13;
    this.opcodes[0].type = CAT;

    this.opcodes[1] = [];
    this.opcodes[1].opNext = 2;
    this.opcodes[1].type = TLS;
    this.opcodes[1].length = 1;
    this.opcodes[1].stringIndex = 0;

    this.opcodes[2] = [];
    this.opcodes[2].opNext = 4;
    this.opcodes[2].type = REP;
    this.opcodes[2].min = 0;
    this.opcodes[2].max = 1;

    this.opcodes[3] = [];
    this.opcodes[3].opNext = 4;
    this.opcodes[3].type = RNM;
    this.opcodes[3].ruleIndex = 1;

    this.opcodes[4] = [];
    this.opcodes[4].opNext = 5;
    this.opcodes[4].type = RNM;
    this.opcodes[4].ruleIndex = 5;

    this.opcodes[5] = [];
    this.opcodes[5].opNext = 9;
    this.opcodes[5].type = REP;
    this.opcodes[5].min = 0;
    this.opcodes[5].max = Infinity;

    this.opcodes[6] = [];
    this.opcodes[6].opNext = 9;
    this.opcodes[6].type = CAT;

    this.opcodes[7] = [];
    this.opcodes[7].opNext = 8;
    this.opcodes[7].type = RNM;
    this.opcodes[7].ruleIndex = 4;

    this.opcodes[8] = [];
    this.opcodes[8].opNext = 9;
    this.opcodes[8].type = RNM;
    this.opcodes[8].ruleIndex = 5;

    this.opcodes[9] = [];
    this.opcodes[9].opNext = 11;
    this.opcodes[9].type = REP;
    this.opcodes[9].min = 0;
    this.opcodes[9].max = 1;

    this.opcodes[10] = [];
    this.opcodes[10].opNext = 11;
    this.opcodes[10].type = RNM;
    this.opcodes[10].ruleIndex = 2;

    this.opcodes[11] = [];
    this.opcodes[11].opNext = 12;
    this.opcodes[11].type = TLS;
    this.opcodes[11].length = 1;
    this.opcodes[11].stringIndex = 1;

    this.opcodes[12] = [];
    this.opcodes[12].opNext = 13;
    this.opcodes[12].type = RNM;
    this.opcodes[12].ruleIndex = 3;

    this.opcodes[13] = [];
    this.opcodes[13].opNext = 14;
    this.opcodes[13].type = TLS;
    this.opcodes[13].length = 1;
    this.opcodes[13].stringIndex = 2;

    this.opcodes[14] = [];
    this.opcodes[14].opNext = 15;
    this.opcodes[14].type = TLS;
    this.opcodes[14].length = 1;
    this.opcodes[14].stringIndex = 3;

    this.opcodes[15] = [];
    this.opcodes[15].opNext = 29;
    this.opcodes[15].type = REP;
    this.opcodes[15].min = 0;
    this.opcodes[15].max = 12;

    this.opcodes[16] = [];
    this.opcodes[16].opNext = 29;
    this.opcodes[16].type = ALT;

    this.opcodes[17] = [];
    this.opcodes[17].opNext = 18;
    this.opcodes[17].type = TLS;
    this.opcodes[17].length = 1;
    this.opcodes[17].stringIndex = 4;

    this.opcodes[18] = [];
    this.opcodes[18].opNext = 19;
    this.opcodes[18].type = TLS;
    this.opcodes[18].length = 1;
    this.opcodes[18].stringIndex = 5;

    this.opcodes[19] = [];
    this.opcodes[19].opNext = 20;
    this.opcodes[19].type = TLS;
    this.opcodes[19].length = 1;
    this.opcodes[19].stringIndex = 6;

    this.opcodes[20] = [];
    this.opcodes[20].opNext = 21;
    this.opcodes[20].type = TLS;
    this.opcodes[20].length = 1;
    this.opcodes[20].stringIndex = 7;

    this.opcodes[21] = [];
    this.opcodes[21].opNext = 22;
    this.opcodes[21].type = TLS;
    this.opcodes[21].length = 1;
    this.opcodes[21].stringIndex = 8;

    this.opcodes[22] = [];
    this.opcodes[22].opNext = 23;
    this.opcodes[22].type = TLS;
    this.opcodes[22].length = 1;
    this.opcodes[22].stringIndex = 9;

    this.opcodes[23] = [];
    this.opcodes[23].opNext = 24;
    this.opcodes[23].type = TLS;
    this.opcodes[23].length = 1;
    this.opcodes[23].stringIndex = 10;

    this.opcodes[24] = [];
    this.opcodes[24].opNext = 25;
    this.opcodes[24].type = TLS;
    this.opcodes[24].length = 1;
    this.opcodes[24].stringIndex = 11;

    this.opcodes[25] = [];
    this.opcodes[25].opNext = 26;
    this.opcodes[25].type = TLS;
    this.opcodes[25].length = 1;
    this.opcodes[25].stringIndex = 12;

    this.opcodes[26] = [];
    this.opcodes[26].opNext = 27;
    this.opcodes[26].type = TLS;
    this.opcodes[26].length = 1;
    this.opcodes[26].stringIndex = 13;

    this.opcodes[27] = [];
    this.opcodes[27].opNext = 28;
    this.opcodes[27].type = TLS;
    this.opcodes[27].length = 1;
    this.opcodes[27].stringIndex = 14;

    this.opcodes[28] = [];
    this.opcodes[28].opNext = 29;
    this.opcodes[28].type = TLS;
    this.opcodes[28].length = 1;
    this.opcodes[28].stringIndex = 15;

    this.opcodes[29] = [];
    this.opcodes[29].opNext = 30;
    this.opcodes[29].type = TLS;
    this.opcodes[29].length = 1;
    this.opcodes[29].stringIndex = 16;

    this.opcodes[30] = [];
    this.opcodes[30].opNext = 38;
    this.opcodes[30].type = REP;
    this.opcodes[30].min = 1;
    this.opcodes[30].max = Infinity;

    this.opcodes[31] = [];
    this.opcodes[31].opNext = 38;
    this.opcodes[31].type = CAT;

    this.opcodes[32] = [];
    this.opcodes[32].opNext = 36;
    this.opcodes[32].type = ALT;

    this.opcodes[33] = [];
    this.opcodes[33].opNext = 34;
    this.opcodes[33].type = RNM;
    this.opcodes[33].ruleIndex = 11;

    this.opcodes[34] = [];
    this.opcodes[34].opNext = 35;
    this.opcodes[34].type = RNM;
    this.opcodes[34].ruleIndex = 7;

    this.opcodes[35] = [];
    this.opcodes[35].opNext = 36;
    this.opcodes[35].type = RNM;
    this.opcodes[35].ruleIndex = 6;

    this.opcodes[36] = [];
    this.opcodes[36].opNext = 38;
    this.opcodes[36].type = REP;
    this.opcodes[36].min = 0;
    this.opcodes[36].max = 1;

    this.opcodes[37] = [];
    this.opcodes[37].opNext = 38;
    this.opcodes[37].type = RNM;
    this.opcodes[37].ruleIndex = 18;

    this.opcodes[38] = [];
    this.opcodes[38].opNext = 42;
    this.opcodes[38].type = REP;
    this.opcodes[38].min = 1;
    this.opcodes[38].max = Infinity;

    this.opcodes[39] = [];
    this.opcodes[39].opNext = 42;
    this.opcodes[39].type = ALT;

    this.opcodes[40] = [];
    this.opcodes[40].opNext = 41;
    this.opcodes[40].type = RNM;
    this.opcodes[40].ruleIndex = 24;

    this.opcodes[41] = [];
    this.opcodes[41].opNext = 42;
    this.opcodes[41].type = RNM;
    this.opcodes[41].ruleIndex = 23;

    this.opcodes[42] = [];
    this.opcodes[42].opNext = 52;
    this.opcodes[42].type = CAT;

    this.opcodes[43] = [];
    this.opcodes[43].opNext = 44;
    this.opcodes[43].type = TLS;
    this.opcodes[43].length = 1;
    this.opcodes[43].stringIndex = 17;

    this.opcodes[44] = [];
    this.opcodes[44].opNext = 46;
    this.opcodes[44].type = REP;
    this.opcodes[44].min = 0;
    this.opcodes[44].max = 1;

    this.opcodes[45] = [];
    this.opcodes[45].opNext = 46;
    this.opcodes[45].type = RNM;
    this.opcodes[45].ruleIndex = 8;

    this.opcodes[46] = [];
    this.opcodes[46].opNext = 47;
    this.opcodes[46].type = RNM;
    this.opcodes[46].ruleIndex = 5;

    this.opcodes[47] = [];
    this.opcodes[47].opNext = 51;
    this.opcodes[47].type = REP;
    this.opcodes[47].min = 0;
    this.opcodes[47].max = Infinity;

    this.opcodes[48] = [];
    this.opcodes[48].opNext = 51;
    this.opcodes[48].type = CAT;

    this.opcodes[49] = [];
    this.opcodes[49].opNext = 50;
    this.opcodes[49].type = RNM;
    this.opcodes[49].ruleIndex = 4;

    this.opcodes[50] = [];
    this.opcodes[50].opNext = 51;
    this.opcodes[50].type = RNM;
    this.opcodes[50].ruleIndex = 5;

    this.opcodes[51] = [];
    this.opcodes[51].opNext = 52;
    this.opcodes[51].type = TLS;
    this.opcodes[51].length = 1;
    this.opcodes[51].stringIndex = 18;

    this.opcodes[52] = [];
    this.opcodes[52].opNext = 65;
    this.opcodes[52].type = CAT;

    this.opcodes[53] = [];
    this.opcodes[53].opNext = 54;
    this.opcodes[53].type = TLS;
    this.opcodes[53].length = 1;
    this.opcodes[53].stringIndex = 19;

    this.opcodes[54] = [];
    this.opcodes[54].opNext = 65;
    this.opcodes[54].type = REP;
    this.opcodes[54].min = 0;
    this.opcodes[54].max = 1;

    this.opcodes[55] = [];
    this.opcodes[55].opNext = 65;
    this.opcodes[55].type = ALT;

    this.opcodes[56] = [];
    this.opcodes[56].opNext = 57;
    this.opcodes[56].type = TLS;
    this.opcodes[56].length = 1;
    this.opcodes[56].stringIndex = 20;

    this.opcodes[57] = [];
    this.opcodes[57].opNext = 58;
    this.opcodes[57].type = TLS;
    this.opcodes[57].length = 1;
    this.opcodes[57].stringIndex = 21;

    this.opcodes[58] = [];
    this.opcodes[58].opNext = 59;
    this.opcodes[58].type = TLS;
    this.opcodes[58].length = 1;
    this.opcodes[58].stringIndex = 22;

    this.opcodes[59] = [];
    this.opcodes[59].opNext = 60;
    this.opcodes[59].type = TLS;
    this.opcodes[59].length = 1;
    this.opcodes[59].stringIndex = 23;

    this.opcodes[60] = [];
    this.opcodes[60].opNext = 61;
    this.opcodes[60].type = TLS;
    this.opcodes[60].length = 2;
    this.opcodes[60].stringIndex = 24;

    this.opcodes[61] = [];
    this.opcodes[61].opNext = 62;
    this.opcodes[61].type = TLS;
    this.opcodes[61].length = 2;
    this.opcodes[61].stringIndex = 26;

    this.opcodes[62] = [];
    this.opcodes[62].opNext = 63;
    this.opcodes[62].type = TLS;
    this.opcodes[62].length = 1;
    this.opcodes[62].stringIndex = 28;

    this.opcodes[63] = [];
    this.opcodes[63].opNext = 64;
    this.opcodes[63].type = TLS;
    this.opcodes[63].length = 1;
    this.opcodes[63].stringIndex = 29;

    this.opcodes[64] = [];
    this.opcodes[64].opNext = 65;
    this.opcodes[64].type = RNM;
    this.opcodes[64].ruleIndex = 9;

    this.opcodes[65] = [];
    this.opcodes[65].opNext = 76;
    this.opcodes[65].type = ALT;

    this.opcodes[66] = [];
    this.opcodes[66].opNext = 72;
    this.opcodes[66].type = CAT;

    this.opcodes[67] = [];
    this.opcodes[67].opNext = 69;
    this.opcodes[67].type = REP;
    this.opcodes[67].min = 0;
    this.opcodes[67].max = 1;

    this.opcodes[68] = [];
    this.opcodes[68].opNext = 69;
    this.opcodes[68].type = TLS;
    this.opcodes[68].length = 1;
    this.opcodes[68].stringIndex = 30;

    this.opcodes[69] = [];
    this.opcodes[69].opNext = 70;
    this.opcodes[69].type = TLS;
    this.opcodes[69].length = 1;
    this.opcodes[69].stringIndex = 31;

    this.opcodes[70] = [];
    this.opcodes[70].opNext = 71;
    this.opcodes[70].type = RNM;
    this.opcodes[70].ruleIndex = 10;

    this.opcodes[71] = [];
    this.opcodes[71].opNext = 72;
    this.opcodes[71].type = TLS;
    this.opcodes[71].length = 1;
    this.opcodes[71].stringIndex = 32;

    this.opcodes[72] = [];
    this.opcodes[72].opNext = 76;
    this.opcodes[72].type = CAT;

    this.opcodes[73] = [];
    this.opcodes[73].opNext = 74;
    this.opcodes[73].type = TLS;
    this.opcodes[73].length = 2;
    this.opcodes[73].stringIndex = 33;

    this.opcodes[74] = [];
    this.opcodes[74].opNext = 75;
    this.opcodes[74].type = RNM;
    this.opcodes[74].ruleIndex = 10;

    this.opcodes[75] = [];
    this.opcodes[75].opNext = 76;
    this.opcodes[75].type = TLS;
    this.opcodes[75].length = 1;
    this.opcodes[75].stringIndex = 35;

    this.opcodes[76] = [];
    this.opcodes[76].opNext = 80;
    this.opcodes[76].type = REP;
    this.opcodes[76].min = 1;
    this.opcodes[76].max = Infinity;

    this.opcodes[77] = [];
    this.opcodes[77].opNext = 80;
    this.opcodes[77].type = ALT;

    this.opcodes[78] = [];
    this.opcodes[78].opNext = 79;
    this.opcodes[78].type = RNM;
    this.opcodes[78].ruleIndex = 33;

    this.opcodes[79] = [];
    this.opcodes[79].opNext = 80;
    this.opcodes[79].type = RNM;
    this.opcodes[79].ruleIndex = 31;

    this.opcodes[80] = [];
    this.opcodes[80].opNext = 92;
    this.opcodes[80].type = ALT;

    this.opcodes[81] = [];
    this.opcodes[81].opNext = 82;
    this.opcodes[81].type = RNM;
    this.opcodes[81].ruleIndex = 13;

    this.opcodes[82] = [];
    this.opcodes[82].opNext = 92;
    this.opcodes[82].type = CAT;

    this.opcodes[83] = [];
    this.opcodes[83].opNext = 84;
    this.opcodes[83].type = TLS;
    this.opcodes[83].length = 1;
    this.opcodes[83].stringIndex = 36;

    this.opcodes[84] = [];
    this.opcodes[84].opNext = 86;
    this.opcodes[84].type = REP;
    this.opcodes[84].min = 0;
    this.opcodes[84].max = 1;

    this.opcodes[85] = [];
    this.opcodes[85].opNext = 86;
    this.opcodes[85].type = RNM;
    this.opcodes[85].ruleIndex = 12;

    this.opcodes[86] = [];
    this.opcodes[86].opNext = 91;
    this.opcodes[86].type = REP;
    this.opcodes[86].min = 1;
    this.opcodes[86].max = Infinity;

    this.opcodes[87] = [];
    this.opcodes[87].opNext = 91;
    this.opcodes[87].type = ALT;

    this.opcodes[88] = [];
    this.opcodes[88].opNext = 89;
    this.opcodes[88].type = RNM;
    this.opcodes[88].ruleIndex = 13;

    this.opcodes[89] = [];
    this.opcodes[89].opNext = 90;
    this.opcodes[89].type = RNM;
    this.opcodes[89].ruleIndex = 14;

    this.opcodes[90] = [];
    this.opcodes[90].opNext = 91;
    this.opcodes[90].type = RNM;
    this.opcodes[90].ruleIndex = 17;

    this.opcodes[91] = [];
    this.opcodes[91].opNext = 92;
    this.opcodes[91].type = TLS;
    this.opcodes[91].length = 1;
    this.opcodes[91].stringIndex = 37;

    this.opcodes[92] = [];
    this.opcodes[92].opNext = 93;
    this.opcodes[92].type = TLS;
    this.opcodes[92].length = 1;
    this.opcodes[92].stringIndex = 38;

    this.opcodes[93] = [];
    this.opcodes[93].opNext = 133;
    this.opcodes[93].type = ALT;

    this.opcodes[94] = [];
    this.opcodes[94].opNext = 95;
    this.opcodes[94].type = TLS;
    this.opcodes[94].length = 1;
    this.opcodes[94].stringIndex = 39;

    this.opcodes[95] = [];
    this.opcodes[95].opNext = 96;
    this.opcodes[95].type = TLS;
    this.opcodes[95].length = 2;
    this.opcodes[95].stringIndex = 40;

    this.opcodes[96] = [];
    this.opcodes[96].opNext = 97;
    this.opcodes[96].type = TLS;
    this.opcodes[96].length = 2;
    this.opcodes[96].stringIndex = 42;

    this.opcodes[97] = [];
    this.opcodes[97].opNext = 98;
    this.opcodes[97].type = TLS;
    this.opcodes[97].length = 2;
    this.opcodes[97].stringIndex = 44;

    this.opcodes[98] = [];
    this.opcodes[98].opNext = 99;
    this.opcodes[98].type = TLS;
    this.opcodes[98].length = 2;
    this.opcodes[98].stringIndex = 46;

    this.opcodes[99] = [];
    this.opcodes[99].opNext = 100;
    this.opcodes[99].type = TLS;
    this.opcodes[99].length = 2;
    this.opcodes[99].stringIndex = 48;

    this.opcodes[100] = [];
    this.opcodes[100].opNext = 101;
    this.opcodes[100].type = TLS;
    this.opcodes[100].length = 2;
    this.opcodes[100].stringIndex = 50;

    this.opcodes[101] = [];
    this.opcodes[101].opNext = 102;
    this.opcodes[101].type = TLS;
    this.opcodes[101].length = 2;
    this.opcodes[101].stringIndex = 52;

    this.opcodes[102] = [];
    this.opcodes[102].opNext = 103;
    this.opcodes[102].type = TLS;
    this.opcodes[102].length = 2;
    this.opcodes[102].stringIndex = 54;

    this.opcodes[103] = [];
    this.opcodes[103].opNext = 104;
    this.opcodes[103].type = TLS;
    this.opcodes[103].length = 2;
    this.opcodes[103].stringIndex = 56;

    this.opcodes[104] = [];
    this.opcodes[104].opNext = 105;
    this.opcodes[104].type = TLS;
    this.opcodes[104].length = 2;
    this.opcodes[104].stringIndex = 58;

    this.opcodes[105] = [];
    this.opcodes[105].opNext = 106;
    this.opcodes[105].type = TLS;
    this.opcodes[105].length = 9;
    this.opcodes[105].stringIndex = 60;

    this.opcodes[106] = [];
    this.opcodes[106].opNext = 107;
    this.opcodes[106].type = TLS;
    this.opcodes[106].length = 9;
    this.opcodes[106].stringIndex = 69;

    this.opcodes[107] = [];
    this.opcodes[107].opNext = 108;
    this.opcodes[107].type = TLS;
    this.opcodes[107].length = 9;
    this.opcodes[107].stringIndex = 78;

    this.opcodes[108] = [];
    this.opcodes[108].opNext = 109;
    this.opcodes[108].type = TLS;
    this.opcodes[108].length = 9;
    this.opcodes[108].stringIndex = 87;

    this.opcodes[109] = [];
    this.opcodes[109].opNext = 110;
    this.opcodes[109].type = TLS;
    this.opcodes[109].length = 9;
    this.opcodes[109].stringIndex = 96;

    this.opcodes[110] = [];
    this.opcodes[110].opNext = 111;
    this.opcodes[110].type = TLS;
    this.opcodes[110].length = 9;
    this.opcodes[110].stringIndex = 105;

    this.opcodes[111] = [];
    this.opcodes[111].opNext = 112;
    this.opcodes[111].type = TLS;
    this.opcodes[111].length = 9;
    this.opcodes[111].stringIndex = 114;

    this.opcodes[112] = [];
    this.opcodes[112].opNext = 113;
    this.opcodes[112].type = TLS;
    this.opcodes[112].length = 9;
    this.opcodes[112].stringIndex = 123;

    this.opcodes[113] = [];
    this.opcodes[113].opNext = 114;
    this.opcodes[113].type = TLS;
    this.opcodes[113].length = 9;
    this.opcodes[113].stringIndex = 132;

    this.opcodes[114] = [];
    this.opcodes[114].opNext = 115;
    this.opcodes[114].type = TLS;
    this.opcodes[114].length = 9;
    this.opcodes[114].stringIndex = 141;

    this.opcodes[115] = [];
    this.opcodes[115].opNext = 116;
    this.opcodes[115].type = TLS;
    this.opcodes[115].length = 9;
    this.opcodes[115].stringIndex = 150;

    this.opcodes[116] = [];
    this.opcodes[116].opNext = 117;
    this.opcodes[116].type = TLS;
    this.opcodes[116].length = 9;
    this.opcodes[116].stringIndex = 159;

    this.opcodes[117] = [];
    this.opcodes[117].opNext = 118;
    this.opcodes[117].type = TLS;
    this.opcodes[117].length = 8;
    this.opcodes[117].stringIndex = 168;

    this.opcodes[118] = [];
    this.opcodes[118].opNext = 119;
    this.opcodes[118].type = TLS;
    this.opcodes[118].length = 10;
    this.opcodes[118].stringIndex = 176;

    this.opcodes[119] = [];
    this.opcodes[119].opNext = 120;
    this.opcodes[119].type = TLS;
    this.opcodes[119].length = 10;
    this.opcodes[119].stringIndex = 186;

    this.opcodes[120] = [];
    this.opcodes[120].opNext = 121;
    this.opcodes[120].type = TLS;
    this.opcodes[120].length = 10;
    this.opcodes[120].stringIndex = 196;

    this.opcodes[121] = [];
    this.opcodes[121].opNext = 122;
    this.opcodes[121].type = TLS;
    this.opcodes[121].length = 10;
    this.opcodes[121].stringIndex = 206;

    this.opcodes[122] = [];
    this.opcodes[122].opNext = 123;
    this.opcodes[122].type = TLS;
    this.opcodes[122].length = 10;
    this.opcodes[122].stringIndex = 216;

    this.opcodes[123] = [];
    this.opcodes[123].opNext = 124;
    this.opcodes[123].type = TLS;
    this.opcodes[123].length = 10;
    this.opcodes[123].stringIndex = 226;

    this.opcodes[124] = [];
    this.opcodes[124].opNext = 125;
    this.opcodes[124].type = TLS;
    this.opcodes[124].length = 10;
    this.opcodes[124].stringIndex = 236;

    this.opcodes[125] = [];
    this.opcodes[125].opNext = 126;
    this.opcodes[125].type = TLS;
    this.opcodes[125].length = 10;
    this.opcodes[125].stringIndex = 246;

    this.opcodes[126] = [];
    this.opcodes[126].opNext = 127;
    this.opcodes[126].type = TLS;
    this.opcodes[126].length = 10;
    this.opcodes[126].stringIndex = 256;

    this.opcodes[127] = [];
    this.opcodes[127].opNext = 128;
    this.opcodes[127].type = TLS;
    this.opcodes[127].length = 10;
    this.opcodes[127].stringIndex = 266;

    this.opcodes[128] = [];
    this.opcodes[128].opNext = 129;
    this.opcodes[128].type = TLS;
    this.opcodes[128].length = 10;
    this.opcodes[128].stringIndex = 276;

    this.opcodes[129] = [];
    this.opcodes[129].opNext = 130;
    this.opcodes[129].type = TLS;
    this.opcodes[129].length = 10;
    this.opcodes[129].stringIndex = 286;

    this.opcodes[130] = [];
    this.opcodes[130].opNext = 131;
    this.opcodes[130].type = TLS;
    this.opcodes[130].length = 10;
    this.opcodes[130].stringIndex = 296;

    this.opcodes[131] = [];
    this.opcodes[131].opNext = 132;
    this.opcodes[131].type = TLS;
    this.opcodes[131].length = 9;
    this.opcodes[131].stringIndex = 306;

    this.opcodes[132] = [];
    this.opcodes[132].opNext = 133;
    this.opcodes[132].type = TLS;
    this.opcodes[132].length = 11;
    this.opcodes[132].stringIndex = 315;

    this.opcodes[133] = [];
    this.opcodes[133].opNext = 137;
    this.opcodes[133].type = CAT;

    this.opcodes[134] = [];
    this.opcodes[134].opNext = 135;
    this.opcodes[134].type = RNM;
    this.opcodes[134].ruleIndex = 15;

    this.opcodes[135] = [];
    this.opcodes[135].opNext = 136;
    this.opcodes[135].type = TLS;
    this.opcodes[135].length = 1;
    this.opcodes[135].stringIndex = 326;

    this.opcodes[136] = [];
    this.opcodes[136].opNext = 137;
    this.opcodes[136].type = RNM;
    this.opcodes[136].ruleIndex = 16;

    this.opcodes[137] = [];
    this.opcodes[137].opNext = 140;
    this.opcodes[137].type = ALT;

    this.opcodes[138] = [];
    this.opcodes[138].opNext = 139;
    this.opcodes[138].type = RNM;
    this.opcodes[138].ruleIndex = 25;

    this.opcodes[139] = [];
    this.opcodes[139].opNext = 140;
    this.opcodes[139].type = RNM;
    this.opcodes[139].ruleIndex = 22;

    this.opcodes[140] = [];
    this.opcodes[140].opNext = 143;
    this.opcodes[140].type = ALT;

    this.opcodes[141] = [];
    this.opcodes[141].opNext = 142;
    this.opcodes[141].type = RNM;
    this.opcodes[141].ruleIndex = 25;

    this.opcodes[142] = [];
    this.opcodes[142].opNext = 143;
    this.opcodes[142].type = RNM;
    this.opcodes[142].ruleIndex = 22;

    this.opcodes[143] = [];
    this.opcodes[143].opNext = 147;
    this.opcodes[143].type = REP;
    this.opcodes[143].min = 1;
    this.opcodes[143].max = Infinity;

    this.opcodes[144] = [];
    this.opcodes[144].opNext = 147;
    this.opcodes[144].type = ALT;

    this.opcodes[145] = [];
    this.opcodes[145].opNext = 146;
    this.opcodes[145].type = RNM;
    this.opcodes[145].ruleIndex = 25;

    this.opcodes[146] = [];
    this.opcodes[146].opNext = 147;
    this.opcodes[146].type = RNM;
    this.opcodes[146].ruleIndex = 22;

    this.opcodes[147] = [];
    this.opcodes[147].opNext = 152;
    this.opcodes[147].type = CAT;

    this.opcodes[148] = [];
    this.opcodes[148].opNext = 151;
    this.opcodes[148].type = ALT;

    this.opcodes[149] = [];
    this.opcodes[149].opNext = 150;
    this.opcodes[149].type = RNM;
    this.opcodes[149].ruleIndex = 19;

    this.opcodes[150] = [];
    this.opcodes[150].opNext = 151;
    this.opcodes[150].type = RNM;
    this.opcodes[150].ruleIndex = 21;

    this.opcodes[151] = [];
    this.opcodes[151].opNext = 152;
    this.opcodes[151].type = RNM;
    this.opcodes[151].ruleIndex = 20;

    this.opcodes[152] = [];
    this.opcodes[152].opNext = 156;
    this.opcodes[152].type = ALT;

    this.opcodes[153] = [];
    this.opcodes[153].opNext = 154;
    this.opcodes[153].type = TLS;
    this.opcodes[153].length = 1;
    this.opcodes[153].stringIndex = 327;

    this.opcodes[154] = [];
    this.opcodes[154].opNext = 155;
    this.opcodes[154].type = TLS;
    this.opcodes[154].length = 1;
    this.opcodes[154].stringIndex = 328;

    this.opcodes[155] = [];
    this.opcodes[155].opNext = 156;
    this.opcodes[155].type = TLS;
    this.opcodes[155].length = 1;
    this.opcodes[155].stringIndex = 329;

    this.opcodes[156] = [];
    this.opcodes[156].opNext = 160;
    this.opcodes[156].type = REP;
    this.opcodes[156].min = 0;
    this.opcodes[156].max = 1;

    this.opcodes[157] = [];
    this.opcodes[157].opNext = 160;
    this.opcodes[157].type = ALT;

    this.opcodes[158] = [];
    this.opcodes[158].opNext = 159;
    this.opcodes[158].type = TLS;
    this.opcodes[158].length = 1;
    this.opcodes[158].stringIndex = 330;

    this.opcodes[159] = [];
    this.opcodes[159].opNext = 160;
    this.opcodes[159].type = TLS;
    this.opcodes[159].length = 1;
    this.opcodes[159].stringIndex = 331;

    this.opcodes[160] = [];
    this.opcodes[160].opNext = 169;
    this.opcodes[160].type = CAT;

    this.opcodes[161] = [];
    this.opcodes[161].opNext = 162;
    this.opcodes[161].type = TLS;
    this.opcodes[161].length = 1;
    this.opcodes[161].stringIndex = 332;

    this.opcodes[162] = [];
    this.opcodes[162].opNext = 163;
    this.opcodes[162].type = RNM;
    this.opcodes[162].ruleIndex = 28;

    this.opcodes[163] = [];
    this.opcodes[163].opNext = 168;
    this.opcodes[163].type = REP;
    this.opcodes[163].min = 0;
    this.opcodes[163].max = 1;

    this.opcodes[164] = [];
    this.opcodes[164].opNext = 168;
    this.opcodes[164].type = CAT;

    this.opcodes[165] = [];
    this.opcodes[165].opNext = 166;
    this.opcodes[165].type = TLS;
    this.opcodes[165].length = 1;
    this.opcodes[165].stringIndex = 333;

    this.opcodes[166] = [];
    this.opcodes[166].opNext = 168;
    this.opcodes[166].type = REP;
    this.opcodes[166].min = 0;
    this.opcodes[166].max = 1;

    this.opcodes[167] = [];
    this.opcodes[167].opNext = 168;
    this.opcodes[167].type = RNM;
    this.opcodes[167].ruleIndex = 29;

    this.opcodes[168] = [];
    this.opcodes[168].opNext = 169;
    this.opcodes[168].type = TLS;
    this.opcodes[168].length = 1;
    this.opcodes[168].stringIndex = 334;

    this.opcodes[169] = [];
    this.opcodes[169].opNext = 192;
    this.opcodes[169].type = CAT;

    this.opcodes[170] = [];
    this.opcodes[170].opNext = 171;
    this.opcodes[170].type = TLS;
    this.opcodes[170].length = 1;
    this.opcodes[170].stringIndex = 335;

    this.opcodes[171] = [];
    this.opcodes[171].opNext = 192;
    this.opcodes[171].type = ALT;

    this.opcodes[172] = [];
    this.opcodes[172].opNext = 173;
    this.opcodes[172].type = TLS;
    this.opcodes[172].length = 1;
    this.opcodes[172].stringIndex = 336;

    this.opcodes[173] = [];
    this.opcodes[173].opNext = 174;
    this.opcodes[173].type = TLS;
    this.opcodes[173].length = 1;
    this.opcodes[173].stringIndex = 337;

    this.opcodes[174] = [];
    this.opcodes[174].opNext = 175;
    this.opcodes[174].type = TLS;
    this.opcodes[174].length = 1;
    this.opcodes[174].stringIndex = 338;

    this.opcodes[175] = [];
    this.opcodes[175].opNext = 176;
    this.opcodes[175].type = TLS;
    this.opcodes[175].length = 1;
    this.opcodes[175].stringIndex = 339;

    this.opcodes[176] = [];
    this.opcodes[176].opNext = 177;
    this.opcodes[176].type = TLS;
    this.opcodes[176].length = 1;
    this.opcodes[176].stringIndex = 340;

    this.opcodes[177] = [];
    this.opcodes[177].opNext = 178;
    this.opcodes[177].type = TLS;
    this.opcodes[177].length = 1;
    this.opcodes[177].stringIndex = 341;

    this.opcodes[178] = [];
    this.opcodes[178].opNext = 181;
    this.opcodes[178].type = CAT;

    this.opcodes[179] = [];
    this.opcodes[179].opNext = 180;
    this.opcodes[179].type = TLS;
    this.opcodes[179].length = 1;
    this.opcodes[179].stringIndex = 342;

    this.opcodes[180] = [];
    this.opcodes[180].opNext = 181;
    this.opcodes[180].type = RNM;
    this.opcodes[180].ruleIndex = 33;

    this.opcodes[181] = [];
    this.opcodes[181].opNext = 185;
    this.opcodes[181].type = CAT;

    this.opcodes[182] = [];
    this.opcodes[182].opNext = 183;
    this.opcodes[182].type = TLS;
    this.opcodes[182].length = 1;
    this.opcodes[182].stringIndex = 343;

    this.opcodes[183] = [];
    this.opcodes[183].opNext = 184;
    this.opcodes[183].type = RNM;
    this.opcodes[183].ruleIndex = 30;

    this.opcodes[184] = [];
    this.opcodes[184].opNext = 185;
    this.opcodes[184].type = RNM;
    this.opcodes[184].ruleIndex = 30;

    this.opcodes[185] = [];
    this.opcodes[185].opNext = 190;
    this.opcodes[185].type = CAT;

    this.opcodes[186] = [];
    this.opcodes[186].opNext = 187;
    this.opcodes[186].type = TLS;
    this.opcodes[186].length = 1;
    this.opcodes[186].stringIndex = 344;

    this.opcodes[187] = [];
    this.opcodes[187].opNext = 188;
    this.opcodes[187].type = RNM;
    this.opcodes[187].ruleIndex = 32;

    this.opcodes[188] = [];
    this.opcodes[188].opNext = 189;
    this.opcodes[188].type = RNM;
    this.opcodes[188].ruleIndex = 32;

    this.opcodes[189] = [];
    this.opcodes[189].opNext = 190;
    this.opcodes[189].type = RNM;
    this.opcodes[189].ruleIndex = 32;

    this.opcodes[190] = [];
    this.opcodes[190].opNext = 191;
    this.opcodes[190].type = RNM;
    this.opcodes[190].ruleIndex = 27;

    this.opcodes[191] = [];
    this.opcodes[191].opNext = 192;
    this.opcodes[191].type = RNM;
    this.opcodes[191].ruleIndex = 31;

    this.opcodes[192] = [];
    this.opcodes[192].opNext = 215;
    this.opcodes[192].type = CAT;

    this.opcodes[193] = [];
    this.opcodes[193].opNext = 194;
    this.opcodes[193].type = TLS;
    this.opcodes[193].length = 1;
    this.opcodes[193].stringIndex = 345;

    this.opcodes[194] = [];
    this.opcodes[194].opNext = 215;
    this.opcodes[194].type = ALT;

    this.opcodes[195] = [];
    this.opcodes[195].opNext = 196;
    this.opcodes[195].type = TLS;
    this.opcodes[195].length = 1;
    this.opcodes[195].stringIndex = 346;

    this.opcodes[196] = [];
    this.opcodes[196].opNext = 197;
    this.opcodes[196].type = TLS;
    this.opcodes[196].length = 1;
    this.opcodes[196].stringIndex = 347;

    this.opcodes[197] = [];
    this.opcodes[197].opNext = 198;
    this.opcodes[197].type = TLS;
    this.opcodes[197].length = 1;
    this.opcodes[197].stringIndex = 348;

    this.opcodes[198] = [];
    this.opcodes[198].opNext = 199;
    this.opcodes[198].type = TLS;
    this.opcodes[198].length = 1;
    this.opcodes[198].stringIndex = 349;

    this.opcodes[199] = [];
    this.opcodes[199].opNext = 200;
    this.opcodes[199].type = TLS;
    this.opcodes[199].length = 1;
    this.opcodes[199].stringIndex = 350;

    this.opcodes[200] = [];
    this.opcodes[200].opNext = 201;
    this.opcodes[200].type = TLS;
    this.opcodes[200].length = 1;
    this.opcodes[200].stringIndex = 351;

    this.opcodes[201] = [];
    this.opcodes[201].opNext = 204;
    this.opcodes[201].type = CAT;

    this.opcodes[202] = [];
    this.opcodes[202].opNext = 203;
    this.opcodes[202].type = TLS;
    this.opcodes[202].length = 1;
    this.opcodes[202].stringIndex = 352;

    this.opcodes[203] = [];
    this.opcodes[203].opNext = 204;
    this.opcodes[203].type = RNM;
    this.opcodes[203].ruleIndex = 33;

    this.opcodes[204] = [];
    this.opcodes[204].opNext = 208;
    this.opcodes[204].type = CAT;

    this.opcodes[205] = [];
    this.opcodes[205].opNext = 206;
    this.opcodes[205].type = TLS;
    this.opcodes[205].length = 1;
    this.opcodes[205].stringIndex = 353;

    this.opcodes[206] = [];
    this.opcodes[206].opNext = 207;
    this.opcodes[206].type = RNM;
    this.opcodes[206].ruleIndex = 30;

    this.opcodes[207] = [];
    this.opcodes[207].opNext = 208;
    this.opcodes[207].type = RNM;
    this.opcodes[207].ruleIndex = 30;

    this.opcodes[208] = [];
    this.opcodes[208].opNext = 213;
    this.opcodes[208].type = CAT;

    this.opcodes[209] = [];
    this.opcodes[209].opNext = 210;
    this.opcodes[209].type = TLS;
    this.opcodes[209].length = 1;
    this.opcodes[209].stringIndex = 354;

    this.opcodes[210] = [];
    this.opcodes[210].opNext = 211;
    this.opcodes[210].type = RNM;
    this.opcodes[210].ruleIndex = 32;

    this.opcodes[211] = [];
    this.opcodes[211].opNext = 212;
    this.opcodes[211].type = RNM;
    this.opcodes[211].ruleIndex = 32;

    this.opcodes[212] = [];
    this.opcodes[212].opNext = 213;
    this.opcodes[212].type = RNM;
    this.opcodes[212].ruleIndex = 32;

    this.opcodes[213] = [];
    this.opcodes[213].opNext = 214;
    this.opcodes[213].type = RNM;
    this.opcodes[213].ruleIndex = 26;

    this.opcodes[214] = [];
    this.opcodes[214].opNext = 215;
    this.opcodes[214].type = RNM;
    this.opcodes[214].ruleIndex = 31;

    this.opcodes[215] = [];
    this.opcodes[215].opNext = 235;
    this.opcodes[215].type = ALT;

    this.opcodes[216] = [];
    this.opcodes[216].opNext = 217;
    this.opcodes[216].type = RNM;
    this.opcodes[216].ruleIndex = 33;

    this.opcodes[217] = [];
    this.opcodes[217].opNext = 218;
    this.opcodes[217].type = RNM;
    this.opcodes[217].ruleIndex = 31;

    this.opcodes[218] = [];
    this.opcodes[218].opNext = 219;
    this.opcodes[218].type = TLS;
    this.opcodes[218].length = 1;
    this.opcodes[218].stringIndex = 355;

    this.opcodes[219] = [];
    this.opcodes[219].opNext = 220;
    this.opcodes[219].type = TLS;
    this.opcodes[219].length = 1;
    this.opcodes[219].stringIndex = 356;

    this.opcodes[220] = [];
    this.opcodes[220].opNext = 221;
    this.opcodes[220].type = TLS;
    this.opcodes[220].length = 1;
    this.opcodes[220].stringIndex = 357;

    this.opcodes[221] = [];
    this.opcodes[221].opNext = 222;
    this.opcodes[221].type = TLS;
    this.opcodes[221].length = 1;
    this.opcodes[221].stringIndex = 358;

    this.opcodes[222] = [];
    this.opcodes[222].opNext = 223;
    this.opcodes[222].type = TLS;
    this.opcodes[222].length = 1;
    this.opcodes[222].stringIndex = 359;

    this.opcodes[223] = [];
    this.opcodes[223].opNext = 224;
    this.opcodes[223].type = TLS;
    this.opcodes[223].length = 1;
    this.opcodes[223].stringIndex = 360;

    this.opcodes[224] = [];
    this.opcodes[224].opNext = 225;
    this.opcodes[224].type = TLS;
    this.opcodes[224].length = 1;
    this.opcodes[224].stringIndex = 361;

    this.opcodes[225] = [];
    this.opcodes[225].opNext = 226;
    this.opcodes[225].type = TLS;
    this.opcodes[225].length = 1;
    this.opcodes[225].stringIndex = 362;

    this.opcodes[226] = [];
    this.opcodes[226].opNext = 227;
    this.opcodes[226].type = TLS;
    this.opcodes[226].length = 1;
    this.opcodes[226].stringIndex = 363;

    this.opcodes[227] = [];
    this.opcodes[227].opNext = 228;
    this.opcodes[227].type = TLS;
    this.opcodes[227].length = 1;
    this.opcodes[227].stringIndex = 364;

    this.opcodes[228] = [];
    this.opcodes[228].opNext = 229;
    this.opcodes[228].type = TLS;
    this.opcodes[228].length = 1;
    this.opcodes[228].stringIndex = 365;

    this.opcodes[229] = [];
    this.opcodes[229].opNext = 230;
    this.opcodes[229].type = TLS;
    this.opcodes[229].length = 1;
    this.opcodes[229].stringIndex = 366;

    this.opcodes[230] = [];
    this.opcodes[230].opNext = 231;
    this.opcodes[230].type = TLS;
    this.opcodes[230].length = 1;
    this.opcodes[230].stringIndex = 367;

    this.opcodes[231] = [];
    this.opcodes[231].opNext = 232;
    this.opcodes[231].type = TLS;
    this.opcodes[231].length = 1;
    this.opcodes[231].stringIndex = 368;

    this.opcodes[232] = [];
    this.opcodes[232].opNext = 233;
    this.opcodes[232].type = TLS;
    this.opcodes[232].length = 1;
    this.opcodes[232].stringIndex = 369;

    this.opcodes[233] = [];
    this.opcodes[233].opNext = 234;
    this.opcodes[233].type = TLS;
    this.opcodes[233].length = 1;
    this.opcodes[233].stringIndex = 370;

    this.opcodes[234] = [];
    this.opcodes[234].opNext = 235;
    this.opcodes[234].type = TRG;
    this.opcodes[234].min = 65;
    this.opcodes[234].max = 65;

    this.opcodes[235] = [];
    this.opcodes[235].opNext = 263;
    this.opcodes[235].type = ALT;

    this.opcodes[236] = [];
    this.opcodes[236].opNext = 237;
    this.opcodes[236].type = RNM;
    this.opcodes[236].ruleIndex = 33;

    this.opcodes[237] = [];
    this.opcodes[237].opNext = 238;
    this.opcodes[237].type = RNM;
    this.opcodes[237].ruleIndex = 31;

    this.opcodes[238] = [];
    this.opcodes[238].opNext = 239;
    this.opcodes[238].type = TLS;
    this.opcodes[238].length = 1;
    this.opcodes[238].stringIndex = 371;

    this.opcodes[239] = [];
    this.opcodes[239].opNext = 240;
    this.opcodes[239].type = TLS;
    this.opcodes[239].length = 1;
    this.opcodes[239].stringIndex = 372;

    this.opcodes[240] = [];
    this.opcodes[240].opNext = 241;
    this.opcodes[240].type = TLS;
    this.opcodes[240].length = 1;
    this.opcodes[240].stringIndex = 373;

    this.opcodes[241] = [];
    this.opcodes[241].opNext = 242;
    this.opcodes[241].type = TLS;
    this.opcodes[241].length = 1;
    this.opcodes[241].stringIndex = 374;

    this.opcodes[242] = [];
    this.opcodes[242].opNext = 243;
    this.opcodes[242].type = TLS;
    this.opcodes[242].length = 1;
    this.opcodes[242].stringIndex = 375;

    this.opcodes[243] = [];
    this.opcodes[243].opNext = 244;
    this.opcodes[243].type = TLS;
    this.opcodes[243].length = 1;
    this.opcodes[243].stringIndex = 376;

    this.opcodes[244] = [];
    this.opcodes[244].opNext = 245;
    this.opcodes[244].type = TLS;
    this.opcodes[244].length = 1;
    this.opcodes[244].stringIndex = 377;

    this.opcodes[245] = [];
    this.opcodes[245].opNext = 246;
    this.opcodes[245].type = TLS;
    this.opcodes[245].length = 1;
    this.opcodes[245].stringIndex = 378;

    this.opcodes[246] = [];
    this.opcodes[246].opNext = 247;
    this.opcodes[246].type = TLS;
    this.opcodes[246].length = 1;
    this.opcodes[246].stringIndex = 379;

    this.opcodes[247] = [];
    this.opcodes[247].opNext = 248;
    this.opcodes[247].type = TLS;
    this.opcodes[247].length = 1;
    this.opcodes[247].stringIndex = 380;

    this.opcodes[248] = [];
    this.opcodes[248].opNext = 249;
    this.opcodes[248].type = TLS;
    this.opcodes[248].length = 1;
    this.opcodes[248].stringIndex = 381;

    this.opcodes[249] = [];
    this.opcodes[249].opNext = 250;
    this.opcodes[249].type = TLS;
    this.opcodes[249].length = 1;
    this.opcodes[249].stringIndex = 382;

    this.opcodes[250] = [];
    this.opcodes[250].opNext = 251;
    this.opcodes[250].type = TLS;
    this.opcodes[250].length = 1;
    this.opcodes[250].stringIndex = 383;

    this.opcodes[251] = [];
    this.opcodes[251].opNext = 252;
    this.opcodes[251].type = TLS;
    this.opcodes[251].length = 1;
    this.opcodes[251].stringIndex = 384;

    this.opcodes[252] = [];
    this.opcodes[252].opNext = 253;
    this.opcodes[252].type = TLS;
    this.opcodes[252].length = 1;
    this.opcodes[252].stringIndex = 385;

    this.opcodes[253] = [];
    this.opcodes[253].opNext = 254;
    this.opcodes[253].type = TLS;
    this.opcodes[253].length = 1;
    this.opcodes[253].stringIndex = 386;

    this.opcodes[254] = [];
    this.opcodes[254].opNext = 255;
    this.opcodes[254].type = TLS;
    this.opcodes[254].length = 1;
    this.opcodes[254].stringIndex = 387;

    this.opcodes[255] = [];
    this.opcodes[255].opNext = 256;
    this.opcodes[255].type = TLS;
    this.opcodes[255].length = 1;
    this.opcodes[255].stringIndex = 388;

    this.opcodes[256] = [];
    this.opcodes[256].opNext = 257;
    this.opcodes[256].type = TLS;
    this.opcodes[256].length = 1;
    this.opcodes[256].stringIndex = 389;

    this.opcodes[257] = [];
    this.opcodes[257].opNext = 258;
    this.opcodes[257].type = TLS;
    this.opcodes[257].length = 1;
    this.opcodes[257].stringIndex = 390;

    this.opcodes[258] = [];
    this.opcodes[258].opNext = 259;
    this.opcodes[258].type = TLS;
    this.opcodes[258].length = 1;
    this.opcodes[258].stringIndex = 391;

    this.opcodes[259] = [];
    this.opcodes[259].opNext = 260;
    this.opcodes[259].type = TLS;
    this.opcodes[259].length = 1;
    this.opcodes[259].stringIndex = 392;

    this.opcodes[260] = [];
    this.opcodes[260].opNext = 261;
    this.opcodes[260].type = TLS;
    this.opcodes[260].length = 1;
    this.opcodes[260].stringIndex = 393;

    this.opcodes[261] = [];
    this.opcodes[261].opNext = 262;
    this.opcodes[261].type = TLS;
    this.opcodes[261].length = 1;
    this.opcodes[261].stringIndex = 394;

    this.opcodes[262] = [];
    this.opcodes[262].opNext = 263;
    this.opcodes[262].type = TRG;
    this.opcodes[262].min = 65;
    this.opcodes[262].max = 65;

    this.opcodes[263] = [];
    this.opcodes[263].opNext = 281;
    this.opcodes[263].type = ALT;

    this.opcodes[264] = [];
    this.opcodes[264].opNext = 265;
    this.opcodes[264].type = TLS;
    this.opcodes[264].length = 1;
    this.opcodes[264].stringIndex = 395;

    this.opcodes[265] = [];
    this.opcodes[265].opNext = 266;
    this.opcodes[265].type = TLS;
    this.opcodes[265].length = 1;
    this.opcodes[265].stringIndex = 396;

    this.opcodes[266] = [];
    this.opcodes[266].opNext = 267;
    this.opcodes[266].type = TLS;
    this.opcodes[266].length = 1;
    this.opcodes[266].stringIndex = 397;

    this.opcodes[267] = [];
    this.opcodes[267].opNext = 268;
    this.opcodes[267].type = TLS;
    this.opcodes[267].length = 1;
    this.opcodes[267].stringIndex = 398;

    this.opcodes[268] = [];
    this.opcodes[268].opNext = 269;
    this.opcodes[268].type = TLS;
    this.opcodes[268].length = 1;
    this.opcodes[268].stringIndex = 399;

    this.opcodes[269] = [];
    this.opcodes[269].opNext = 270;
    this.opcodes[269].type = TLS;
    this.opcodes[269].length = 1;
    this.opcodes[269].stringIndex = 400;

    this.opcodes[270] = [];
    this.opcodes[270].opNext = 271;
    this.opcodes[270].type = TLS;
    this.opcodes[270].length = 1;
    this.opcodes[270].stringIndex = 401;

    this.opcodes[271] = [];
    this.opcodes[271].opNext = 272;
    this.opcodes[271].type = TLS;
    this.opcodes[271].length = 1;
    this.opcodes[271].stringIndex = 402;

    this.opcodes[272] = [];
    this.opcodes[272].opNext = 273;
    this.opcodes[272].type = TLS;
    this.opcodes[272].length = 1;
    this.opcodes[272].stringIndex = 403;

    this.opcodes[273] = [];
    this.opcodes[273].opNext = 274;
    this.opcodes[273].type = TLS;
    this.opcodes[273].length = 1;
    this.opcodes[273].stringIndex = 404;

    this.opcodes[274] = [];
    this.opcodes[274].opNext = 275;
    this.opcodes[274].type = TLS;
    this.opcodes[274].length = 1;
    this.opcodes[274].stringIndex = 405;

    this.opcodes[275] = [];
    this.opcodes[275].opNext = 276;
    this.opcodes[275].type = TLS;
    this.opcodes[275].length = 1;
    this.opcodes[275].stringIndex = 406;

    this.opcodes[276] = [];
    this.opcodes[276].opNext = 277;
    this.opcodes[276].type = TLS;
    this.opcodes[276].length = 1;
    this.opcodes[276].stringIndex = 407;

    this.opcodes[277] = [];
    this.opcodes[277].opNext = 278;
    this.opcodes[277].type = TLS;
    this.opcodes[277].length = 1;
    this.opcodes[277].stringIndex = 408;

    this.opcodes[278] = [];
    this.opcodes[278].opNext = 279;
    this.opcodes[278].type = TLS;
    this.opcodes[278].length = 1;
    this.opcodes[278].stringIndex = 409;

    this.opcodes[279] = [];
    this.opcodes[279].opNext = 280;
    this.opcodes[279].type = TLS;
    this.opcodes[279].length = 1;
    this.opcodes[279].stringIndex = 410;

    this.opcodes[280] = [];
    this.opcodes[280].opNext = 281;
    this.opcodes[280].type = TLS;
    this.opcodes[280].length = 1;
    this.opcodes[280].stringIndex = 411;

    this.opcodes[281] = [];
    this.opcodes[281].opNext = 288;
    this.opcodes[281].type = ALT;

    this.opcodes[282] = [];
    this.opcodes[282].opNext = 283;
    this.opcodes[282].type = TLS;
    this.opcodes[282].length = 1;
    this.opcodes[282].stringIndex = 412;

    this.opcodes[283] = [];
    this.opcodes[283].opNext = 284;
    this.opcodes[283].type = TLS;
    this.opcodes[283].length = 1;
    this.opcodes[283].stringIndex = 413;

    this.opcodes[284] = [];
    this.opcodes[284].opNext = 285;
    this.opcodes[284].type = TLS;
    this.opcodes[284].length = 1;
    this.opcodes[284].stringIndex = 414;

    this.opcodes[285] = [];
    this.opcodes[285].opNext = 286;
    this.opcodes[285].type = TLS;
    this.opcodes[285].length = 1;
    this.opcodes[285].stringIndex = 415;

    this.opcodes[286] = [];
    this.opcodes[286].opNext = 287;
    this.opcodes[286].type = TLS;
    this.opcodes[286].length = 1;
    this.opcodes[286].stringIndex = 416;

    this.opcodes[287] = [];
    this.opcodes[287].opNext = 288;
    this.opcodes[287].type = TLS;
    this.opcodes[287].length = 1;
    this.opcodes[287].stringIndex = 417;

    this.opcodes[288] = [];
    this.opcodes[288].opNext = 290;
    this.opcodes[288].type = REP;
    this.opcodes[288].min = 1;
    this.opcodes[288].max = Infinity;

    this.opcodes[289] = [];
    this.opcodes[289].opNext = 290;
    this.opcodes[289].type = RNM;
    this.opcodes[289].ruleIndex = 31;

    this.opcodes[290] = [];
    this.opcodes[290].opNext = 292;
    this.opcodes[290].type = REP;
    this.opcodes[290].min = 1;
    this.opcodes[290].max = Infinity;

    this.opcodes[291] = [];
    this.opcodes[291].opNext = 292;
    this.opcodes[291].type = RNM;
    this.opcodes[291].ruleIndex = 31;

    this.opcodes[292] = [];
    this.opcodes[292].opNext = 296;
    this.opcodes[292].type = ALT;

    this.opcodes[293] = [];
    this.opcodes[293].opNext = 294;
    this.opcodes[293].type = RNM;
    this.opcodes[293].ruleIndex = 31;

    this.opcodes[294] = [];
    this.opcodes[294].opNext = 295;
    this.opcodes[294].type = TRG;
    this.opcodes[294].min = 97;
    this.opcodes[294].max = 101;

    this.opcodes[295] = [];
    this.opcodes[295].opNext = 296;
    this.opcodes[295].type = TRG;
    this.opcodes[295].min = 65;
    this.opcodes[295].max = 69;

    this.opcodes[296] = [];
    this.opcodes[296].opNext = 297;
    this.opcodes[296].type = TRG;
    this.opcodes[296].min = 48;
    this.opcodes[296].max = 57;

    this.opcodes[297] = [];
    this.opcodes[297].opNext = 298;
    this.opcodes[297].type = TRG;
    this.opcodes[297].min = 48;
    this.opcodes[297].max = 55;

    this.opcodes[298] = [];
    this.opcodes[298].opNext = 301;
    this.opcodes[298].type = ALT;

    this.opcodes[299] = [];
    this.opcodes[299].opNext = 300;
    this.opcodes[299].type = TRG;
    this.opcodes[299].min = 65;
    this.opcodes[299].max = 90;

    this.opcodes[300] = [];
    this.opcodes[300].opNext = 301;
    this.opcodes[300].type = TRG;
    this.opcodes[300].min = 97;
    this.opcodes[300].max = 122;

}
