/* This file is writen for the main alphabet. You shouldn't write anything here.
 * Import this file using the following HTML or equivalent:
 * <script src="js/dana2.0_typography.js"></script> */


var dana = {};
dana.get_character = function (character, element) {
  $(element).append(character);
};

dana_char = [];

/* --------------- 32 SPACE --------------- */
dana_char['d32'] = $('\
    <div class="letter c_32">\
        <div class="letter_space">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_32">\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 33 EXCLAMATION MARK --------------- */
dana_char['d33'] = $('\
    <div class="vertical_sign c_33">\
        <div class="sign_exclamation_mark top1">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_33">\
                <g class="form f33 square s33 s33_01">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f33 square s33 s33_02">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f33 square s33 s33_03">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f33 square s33 s33_04">\
                    <rect x="16" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f33 square s33 s33_05">\
                    <rect x="32" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f33 square s33 s33_06">\
                    <rect x="48" width="16" height="16"/>\
                </g>\
                <g class="form f33 path p33 p33_01">\
                    <path d="M8,32c-4.4,0-8,3.6-8,8v8h16v-8C16,35.6,12.4,32,8,32z"/>\
                </g>\
                <g class="form f33 path p33 p33_02">\
                    <path d="M0,96v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H0z"/>\
                </g>\
                <g class="form f33 circle c33 c33_03">\
                    <circle cx="8" cy="136" r="8"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 34 QUOTATION MARK --------------- */
dana_char['d34'] = $('\
    <div class="vertical_sign c_34">\
        <div class="sign_quotation_mark top3">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_34">\
                <g class="form f34 path p34 p34_01">\
                    <path class="st0" d="M8,0C3.6,0,0,3.6,0,8v8h16V8C16,3.6,12.4,0,8,0z"/>\
                </g>\
                <g class="form f34 path p34 p34_02">\
                    <path class="st0" d="M16,16H0c0,4.4,3.6,8,8,8S16,20.4,16,16z"/>\
                </g>\
                <g class="form f34 path p34 p34_03">\
                    <path class="st0" d="M32,0c-4.4,0-8,3.6-8,8v8h16V8C40,3.6,36.4,0,32,0z"/>\
                </g>\
                <g class="form f34 path p34 p34_04">\
                    <path class="st0" d="M40,16H24c0,4.4,3.6,8,8,8S40,20.4,40,16z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 35 NUMBER SIGN --------------- */
dana_char['d35'] = $('\
    <div class="horizontal_sign c_35">\
        <div class="sign_number_sign ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_35">\
                <g class="form f35 square s35 s35_01">\
                    <rect x="64" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_02">\
                    <rect x="96" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_03">\
                    <rect x="16" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_04">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_05">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_06">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_07">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_08">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_09">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_10">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_11">\
                    <rect x="144" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_12">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_13">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_14">\
                    <rect x="16" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_15">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_16">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_17">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_18">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_19">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_20">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_21">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_22">\
                    <rect x="144" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_23">\
                    <rect x="64" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f35 square s35 s35_24">\
                    <rect x="96" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f35 path p35 p35_01">\
                    <path d="M72,0c-4.4,0-8,3.6-8,8v8h16V8C80,3.6,76.4,0,72,0z"/>\
                </g>\
                <g class="form f35 path p35 p35_02">\
                    <path d="M104,0c-4.4,0-8,3.6-8,8v8h16V8C112,3.6,108.4,0,104,0z"/>\
                </g>\
                <g class="form f35 path p35 p35_03">\
                    <path d="M8,32c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V32H8z"/>\
                </g>\
                <g class="form f35 path p35 p35_04">\
                    <path d="M168,32h-8v16h8c4.4,0,8-3.6,8-8S172.4,32,168,32z"/>\
                </g>\
                <g class="form f35 path p35 p35_05">\
                    <path d="M8,64c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V64H8z"/>\
                </g>\
                <g class="form f35 path p35 p35_06">\
                    <path d="M168,64h-8v16h8c4.4,0,8-3.6,8-8S172.4,64,168,64z"/>\
                </g>\
                <g class="form f35 path p35 p35_07">\
                    <path d="M64,96v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H64z"/>\
                </g>\
                <g class="form f35 path p35 p35_08">\
                    <path d="M96,96v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H96z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 36 DOLLAR SIGN --------------- */
dana_char['d36'] = $('\
    <div class="horizontal_sign c_36">\
        <div class="sign_dollar_sign ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_36">\
                <g class="form f36 square s36 s36_01">\
                    <rect x="80" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_02">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_03">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_04">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_05">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_06">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_07">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_08">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_09">\
                    <rect x="144" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_10">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_11">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_12">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_13">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_14">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_15">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_16">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_17">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_18">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_19">\
                    <rect x="16" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_20">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_21">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_22">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_23">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_24">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_25">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_26">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f36 square s36 s36_27">\
                    <rect x="80" y="112" width="16" height="16"/>\
                </g>\
                <g class="form f36 path p36 p36_01">\
                    <path d="M88,0c-4.4,0-8,3.6-8,8v8h16V8C96,3.6,92.4,0,88,0z"/>\
                </g>\
                <g class="form f36 path p36 p36_02">\
                    <path d="M16,32L16,32l0,16L0,48C0,39.2,7.2,32,16,32z"/>\
                </g>\
                <g class="form f36 path p36 p36_03">\
                    <path d="M16,32v16v8c0-4.4,3.6-8,8-8h8V32H16z"/>\
                </g>\
                <g class="form f36 path p36 p36_04">\
                    <path d="M168,32h-8v16h8c4.4,0,8-3.6,8-8S172.4,32,168,32z"/>\
                </g>\
                <g class="form f36 path p36 p36_05">\
                    <path d="M0,64L0,64l16,0v16C7.2,80,0,72.8,0,64z"/>\
                </g>\
                <g class="form f36 path p36 p36_06">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g class="form f36 path p36 p36_07">\
                    <path d="M144,64v16h8c4.4,0,8,3.6,8,8v-8V64H144z"/>\
                </g>\
                <g class="form f36 path p36 p36_08">\
                    <path d="M176,80L176,80l-16,0V64C168.8,64,176,71.2,176,80z"/>\
                </g>\
                <g class="form f36 path p36 p36_09">\
                    <path d="M8,96c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V96H8z"/>\
                </g>\
                <g class="form f36 path p36 p36_10">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f36 path p36 p36_11">\
                    <path d="M160,112L160,112l0-16h16C176,104.8,168.8,112,160,112z"/>\
                </g>\
                <g class="form f36 path p36 p36_12">\
                    <path d="M80,128v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H80z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 37 PERCENT SIGN --------------- */
dana_char['d37'] = $('\
    <div class="vertical_sign c_37">\
        <div class="sign_percent top2">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_37">\
                <g class="form f37 square s37 s37_01">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f37 square s37 s37_02">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f37 square s37 s37_03">\
                    <rect x="32" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f37 square s37 s37_04">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f37 square s37 s37_05">\
                    <rect x="64" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f37 square s37 s37_06">\
                    <rect x="80" width="16" height="16"/>\
                </g>\
                <g class="form f37 path p37 p37_01">\
                    <path d="M24,16c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V16H24z"/>\
                </g>\
                <g class="form f37 path p37 p37_02">\
                    <path d="M48,32L48,32l-16,0V16C40.8,16,48,23.2,48,32z"/>\
                </g>\
                <g class="form f37 path p37 p37_03">\
                    <path d="M8,40c-4.4,0-8,3.6-8,8v8h16v-8C16,43.6,12.4,40,8,40z"/>\
                </g>\
                <g class="form f37 path p37 p37_04">\
                    <path d="M32,40v8h16V32H32v0h-8C28.4,32,32,35.6,32,40z"/>\
                </g>\
                <g class="form f37 path p37 p37_05">\
                    <path d="M16,56H0c0,4.4,3.6,8,8,8S16,60.4,16,56z"/>\
                </g>\
                <g class="form f37 path p37 p37_06">\
                    <path d="M72,80c-4.4,0-8,3.6-8,8v8h16v-8C80,83.6,76.4,80,72,80z"/>\
                </g>\
                <g class="form f37 path p37 p37_07">\
                    <path d="M80,96H64c0,4.4,3.6,8,8,8S80,100.4,80,96z"/>\
                </g>\
                <g class="form f37 path p37 p37_08">\
                    <path d="M48,104v-8H32v16h16v0h8C51.6,112,48,108.4,48,104z"/>\
                </g>\
                <g class="form f37 path p37 p37_09">\
                    <path d="M32,112L32,112l16,0l0,16C39.2,128,32,120.8,32,112z"/>\
                </g>\
                <g class="form f37 path p37 p37_10">\
                    <path d="M56,112h-8v16h8c4.4,0,8-3.6,8-8S60.4,112,56,112z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 38 AMPERSAND --------------- */
dana_char['d38'] = $('\
    <div class="horizontal_sign c_38">\
        <div class="sign_ampersand ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_38">\
                <g class="form f38 square s38 s38_01">\
                    <rect x="32" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_02">\
                    <rect x="48" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_03">\
                    <rect x="64" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_04">\
                    <rect x="80" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_05">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_06">\
                    <rect x="112" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_07">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_08">\
                    <rect x="48" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_09">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_10">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_11">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_12">\
                    <rect x="112" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_13">\
                    <rect x="144" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_14">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_15">\
                    <rect x="144" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_16">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_17">\
                    <rect x="144" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_18">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_19">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_20">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_21">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_22">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f38 square s38 s38_23">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f38 path p38 p38_01">\
                    <path d="M16,0L16,0l0,16H0C0,7.2,7.2,0,16,0z"/>\
                </g>\
                <g class="form f38 path p38 p38_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f38 path p38 p38_03">\
                    <path d="M96,0v16h8c4.4,0,8,3.6,8,8v-8V0H96z"/>\
                </g>\
                <g class="form f38 path p38 p38_04">\
                    <path d="M112,0L112,0l0,16h16C128,7.2,120.8,0,112,0z"/>\
                </g>\
                <g class="form f38 path p38 p38_05">\
                    <path d="M16,40v-8H0c0,8.8,7.2,16,16,16h0h8C19.6,48,16,44.4,16,40z"/>\
                </g>\
                <g class="form f38 path p38 p38_06">\
                    <path d="M112,32v8c0,4.4-3.6,8-8,8h8h0c8.8,0,16-7.2,16-16H112z"/>\
                </g>\
                <g class="form f38 path p38 p38_07">\
                    <path d="M152,32c-4.4,0-8,3.6-8,8v8h16v-8C160,35.6,156.4,32,152,32z"/>\
                </g>\
                <g class="form f38 path p38 p38_08">\
                    <path d="M0,64L0,64l16,0V48C7.2,48,0,55.2,0,64z"/>\
                </g>\
                <g class="form f38 path p38 p38_09">\
                    <path d="M16,48v16v8c0-4.4,3.6-8,8-8h8V48H16z"/>\
                </g>\
                <g class="form f38 path p38 p38_10">\
                    <path d="M128,48v16h8c4.4,0,8,3.6,8,8v-8V48H128z"/>\
                </g>\
                <g class="form f38 path p38 p38_11">\
                    <path d="M168,48h-8v16h8c4.4,0,8-3.6,8-8S172.4,48,168,48z"/>\
                </g>\
                <g class="form f38 path p38 p38_12">\
                    <path d="M16,112L16,112l0-16H0C0,104.8,7.2,112,16,112z"/>\
                </g>\
                <g class="form f38 path p38 p38_13">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f38 path p38 p38_14">\
                    <path d="M136,96h-8v16h16V96v-8C144,92.4,140.4,96,136,96z"/>\
                </g>\
                <g class="form f38 path p38 p38_15">\
                    <path d="M160,96L160,96l-16,0v16C152.8,112,160,104.8,160,96z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 39 APOSTROPHE --------------- */
dana_char['d39'] = $('\
    <div class="vertical_sign c_39">\
        <div class="sign_apostrophe top3">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_39">\
                <g class="form f39 path p39 p39_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8v8h16V8C16,3.6,12.4,0,8,0z"/>\
                </g>\
                <g class="form f39 path p39 p39_02">\
                    <path d="M16,16H0c0,4.4,3.6,8,8,8S16,20.4,16,16z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 40 LEFT PARENTHESIS --------------- */
dana_char['d40'] = $('\
    <div class="vertical_sign c_40">\
        <div class="sign_left_parenthesis top2">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_40">\
                <g class="form f40 square s40 s40_01">\
                    <rect y="48" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f40 square s40 s40_02">\
                    <rect y="64" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f40 square s40 s40_03">\
                    <rect y="80" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f40 square s40 s40_04">\
                    <rect x="16" y="32" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f40 square s40 s40_05">\
                    <rect x="32" y="16" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f40 square s40 s40_06">\
                    <rect x="48" y="0" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f40 path p40 p40_01">\
                    <path class="st0" d="M0,32L0,32h16V16C7.2,16,0,23.2,0,32z"/>\
                </g>\
                <g class="form f40 path p40 p40_02">\
                    <path d="M31.9,24c0-4.4-3.6-8-8-8h-8v16h8C28.4,32,31.9,28.4,31.9,24z"/>\
                </g>\
                <g class="form f40 path p40 p40_03">\
                    <path class="st0" d="M16,40v8H0V32h16l0,0h8C19.6,32,16,35.6,16,40z"/>\
                </g>\
                <g class="form f40 path p40 p40_04">\
                    <path class="st0" d="M16,104v-8H0v16h16l0,0h8C19.6,112,16,108.4,16,104z"/>\
                </g>\
                <g class="form f40 path p40 p40_05">\
                    <path class="st0" d="M0,112L0,112h16v16C7.2,128,0,120.8,0,112z"/>\
                </g>\
                <g class="form f40 path p40 p40_06">\
                    <path d="M31.9,120c0-4.4-3.6-8-8-8h-8v16h8C28.4,128,31.9,124.4,31.9,120z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 41 RIGHT PARENTHESIS --------------- */
dana_char['d41'] = $('\
    <div class="vertical_sign c_41">\
        <div class="sign_right_parenthesis top2">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_41">\
                <g class="form f41 square s41 s41_01">\
                    <rect x="16" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f41 square s41 s41_02">\
                    <rect x="16" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f41 square s41 s41_03">\
                    <rect x="16" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f41 square s41 s41_04">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f41 square s41 s41_05">\
                    <rect x="48" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f41 square s41 s41_06">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f41 path p41 p41_01">\
                    <path d="M0,24c0,4.4,3.6,8,8,8h8V16H8C3.5,16,0,19.6,0,24z"/>\
                </g>\
                <g class="form f41 path p41 p41_02">\
                    <path d="M32,32L32,32H16l0,0V16l0,0C24.9,16,32,23.2,32,32z"/>\
                </g>\
                <g class="form f41 path p41 p41_03">\
                    <path d="M16,40v8h16V32H16l0,0H8C12.4,32,16,35.6,16,40z"/>\
                </g>\
                <g class="form f41 path p41 p41_04">\
                    <path d="M16,104v-8h16v16H16l0,0H8C12.4,112,16,108.4,16,104z"/>\
                </g>\
                <g class="form f41 path p41 p41_05">\
                    <path d="M0,120c0,4.4,3.6,8,8,8h8v-16H8C3.5,112,0,115.6,0,120z"/>\
                </g>\
                <g class="form f41 path p41 p41_06">\
                    <path d="M32,112L32,112H16l0,0v15.9l0,0C24.9,128,32,120.8,32,112z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 42 ASTERISK --------------- */
dana_char['d42'] = $('\
    <div class="vertical_sign c_42">\
        <div class="sign_asterisk top3path">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_42">\
                <g class="form f42 square s42 s42_01">\
                    <rect x="8" y="8" width="16" height="16"/>\
                </g>\
                <g class="form f42 path p42 p42_01">\
                    <path d="M8,8h16c0-4.4-3.6-8-8-8S8,3.6,8,8z"/>\
                </g>\
                <g class="form f42 path p42 p42_02">\
                    <path d="M8,24V8c-4.4,0-8,3.6-8,8S3.6,24,8,24z"/>\
                </g>\
                <g class="form f42 path p42 p42_03">\
                    <path d="M24,8v16c4.4,0,8-3.6,8-8S28.4,8,24,8z"/>\
                </g>\
                <g class="form f42 path p42 p42_04">\
                    <path d="M24,24H8c0,4.4,3.6,8,8,8S24,28.4,24,24z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 43 PLUS SIGN --------------- */
dana_char['d43'] = $('\
    <div class="horizontal_sign c_43">\
        <div class="sign_plus_sign xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_43">\
                <g class="form f43 square s43 s43_01">\
                    <rect x="80" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f43 square s43 s43_02">\
                    <rect x="16" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f43 square s43 s43_03">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f43 square s43 s43_04">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f43 square s43 s43_05">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f43 square s43 s43_06">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f43 square s43 s43_07">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f43 square s43 s43_08">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f43 square s43 s43_09">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f43 square s43 s43_10">\
                    <rect x="144" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f43 square s43 s43_11">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f43 path p43 p43_01">\
                    <path d="M88,0c-4.4,0-8,3.6-8,8v8h16V8C96,3.6,92.4,0,88,0z"/>\
                </g>\
                <g class="form f43 path p43 p43_02">\
                    <path d="M8,32c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V32H8z"/>\
                </g>\
                <g class="form f43 path p43 p43_03">\
                    <path d="M168,32h-8v16h8c4.4,0,8-3.6,8-8S172.4,32,168,32z"/>\
                </g>\
                <g class="form f43 path p43 p43_04">\
                    <path d="M80,64v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H80z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 44 COMMA --------------- */
dana_char['d44'] = $('\
    <div class="vertical_sign c_44">\
        <div class="sign_comma top9path">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_44">\
                <g class="form f44 path p44 p44_01">\
                    <path d="M16,0c-4.4,0-8,3.6-8,8v8h16V8C24,3.6,20.4,0,16,0z"/>\
                </g>\
                <g class="form f44 path p44 p44_02">\
                    <path d="M8,16v8c0,4.4-3.6,8-8,8h8h0c8.8,0,16-7.2,16-16H8z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 45 HYPHEN-MINUS --------------- */
dana_char['d45'] = $('\
    <div class="horizontal_sign c_45">\
        <div class="sign_hyphen-minus top7">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_45">\
                <g class="form f45 square s45 s45_01">\
                    <rect x="16" width="16" height="16"/>\
                </g>\
                <g class="form f45 square s45 s45_02">\
                    <rect x="32" width="16" height="16"/>\
                </g>\
                <g class="form f45 square s45 s45_03">\
                    <rect x="48" width="16" height="16"/>\
                </g>\
                <g class="form f45 square s45 s45_04">\
                    <rect x="64" width="16" height="16"/>\
                </g>\
                <g class="form f45 square s45 s45_05">\
                    <rect x="80" width="16" height="16"/>\
                </g>\
                <g class="form f45 square s45 s45_06">\
                    <rect x="96" width="16" height="16"/>\
                </g>\
                <g class="form f45 square s45 s45_07">\
                    <rect x="112" width="16" height="16"/>\
                </g>\
                <g class="form f45 square s45 s45_08">\
                    <rect x="128" width="16" height="16"/>\
                </g>\
                <g class="form f45 square s45 s45_09">\
                    <rect x="144" width="16" height="16"/>\
                </g>\
                <g class="form f45 path p45 p45_01"> \
                    <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8h8V0H8z"/>\
                </g>\
                <g class="form f45 path p45 p45_02">\
                    <path d="M168,0h-8v16h8c4.4,0,8-3.6,8-8S172.4,0,168,0z"/>\
                </g>\
             </svg>  \
        </div>\
    </div>\
');

/* --------------- 46 FULL STOP --------------- */
dana_char['d46'] = $('\
    <div class="vertical_sign c_46">\
        <div class="sign_full_stop top9">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_46">\
                <g class="form f46 circle c46 c46_01">\
                    <circle cx="8" cy="8" r="8"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 47 SOLIDUS --------------- */
dana_char['d47'] = $('\
    <div class="vertical_sign c_47">\
        <div class="sign_solidus top2">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_47">\
                <g class="form f47 square s47 s47_01">\
                    <rect x="16" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f47 square s47 s47_02">\
                    <rect x="16" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f47 square s47 s47_03">\
                    <rect x="16" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f47 square s47 s47_04">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f47 square s47 s47_05">\
                    <rect x="48" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f47 square s47 s47_06">\
                    <rect x="64" width="16" height="16"/>\
                </g>\
                <g class="form f47 path p47 p47_01">\
                    <path d="M16,32L16,32l16,0V16C23.2,16,16,23.2,16,32z"/>\
                </g>\
                <g class="form f47 path p47 p47_02">\
                    <path d="M40,16h-8v16h8c4.4,0,8-3.6,8-8S44.4,16,40,16z"/>\
                </g>\
                <g class="form f47 path p47 p47_03">\
                    <path d="M32,40v8H16V32h16v0h8C35.6,32,32,35.6,32,40z"/>\
                </g>\
                <g class="form f47 path p47 p47_04">\
                    <path d="M16,104v-8h16v16H16v0H8C12.4,112,16,108.4,16,104z"/>\
                </g>\
                <g class="form f47 path p47 p47_05">\
                    <path d="M8,112c-4.4,0-8,3.6-8,8s3.6,8,8,8h8v-16H8z"/>\
                </g>\
                <g class="form f47 path p47 p47_06">\
                    <path d="M32,112L32,112l-16,0v16C24.8,128,32,120.8,32,112z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 48 NUMBER 0 LOWERCASE --------------- */
dana_char['d48'] = $('\
    <div class="number c_48">\
        <div class="number_0 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_48">\
                <g class="form f48 square s48 s48_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_08">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_10">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_11">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_12">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_13">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_14">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_15">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_16">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_17">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_18">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_19">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f48 square s48 s48_20">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f48 path p48 p48_01">\
                    <path d="M0,16L0,16l16,0V0C7.2,0,0,7.2,0,16z"/>\
                </g>\
                <g class="form f48 path p48 p48_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f48 path p48 p48_03">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f48 path p48 p48_04">\
                    <path d="M176,16L176,16l-16,0V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f48 path p48 p48_05">\
                    <path d="M16,80L16,80l0-16H0C0,72.8,7.2,80,16,80z"/>\
                </g>\
                <g class="form f48 path p48 p48_06">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g class="form f48 path p48 p48_07">\
                    <path d="M152,64h-8v16h16V64v-8C160,60.4,156.4,64,152,64z"/>\
                </g>\
                <g class="form f48 path p48 p48_08">\
                    <path d="M160,80L160,80l0-16h16C176,72.8,168.8,80,160,80z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 49 NUMBER 1 LOWERCASE --------------- */
dana_char['d49'] = $('\
    <div class="number c_49">\
        <div class="number_1 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_49">\
                <g class="form f49 square s49 s49_01">\
                    <rect x="16" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f49 square s49 s49_02">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f49 square s49 s49_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f49 square s49 s49_04">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f49 square s49 s49_05">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f49 square s49 s49_06">\
                    <rect x="96" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f49 square s49 s49_07">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f49 square s49 s49_08">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f49 square s49 s49_09">\
                    <rect x="16" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49 square s49 s49_10">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49 square s49 s49_11">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49 square s49 s49_12">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49 square s49 s49_13">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49 square s49 s49_14">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49 square s49 s49_15">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49 square s49 s49_16">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49 square s49 s49_17">\
                    <rect x="144" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49 path p49 p49_01">\
                    <path d="M16,16V0c-4.4,0-8,3.6-8,8S11.6,16,16,16z"/>\
                </g>\
                <g class="form f49 path p49 p49_02">\
                    <path d="M112,16L112,16l-16,0V0C104.8,0,112,7.2,112,16z"/>\
                </g>\
                <g class="form f49 path p49 p49_03">\
                    <path d="M8,64c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V64H8z"/>\
                </g>\
                <g class="form f49 path p49 p49_04">\
                    <path d="M168,64h-8v16h8c4.4,0,8-3.6,8-8S172.4,64,168,64z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 50 NUMBER 2 LOWERCASE --------------- */
dana_char['d50'] = $('\
    <div class="number c_50">\
        <div class="number_2 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_50">\
                <g class="form f50 square s50 s50_01">\
                    <rect x="16" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_02">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>                            \
                <g class="form f50 square s50 s50_04">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_05">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_06">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_07">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_08">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_10">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_11">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_12">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_13">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_14">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_15">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_16">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_17">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_18">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_19">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_20">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_21">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_22">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_23">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_24">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_25">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50 square s50 s50_26">\
                    <rect x="144" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50 path p50 p50_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8h8V0H8z"/>\
                </g>\
                <g class="form f50 path p50 p50_02">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f50 path p50 p50_03">\
                    <path d="M176,16L176,16l-16,0V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f50 path p50 p50_04">\
                    <path d="M16,32L16,32l0,16H0C0,39.2,7.2,32,16,32z"/>\
                </g>\
                <g class="form f50 path p50 p50_05">\
                    <path d="M16,32v16v8c0-4.4,3.6-8,8-8h8V32H16z"/>\
                </g>\
                <g class="form f50 path p50 p50_06">\
                    <path d="M152,32h-8v16h16V32v-8C160,28.4,156.4,32,152,32z"/>\
                </g>\
                <g class="form f50 path p50 p50_07">\
                    <path d="M160,48L160,48l0-16h16C176,40.8,168.8,48,160,48z"/>\
                </g>\
                <g class="form f50 path p50 p50_08">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g class="form f50 path p50 p50_09">\
                    <path d="M168,64h-8v16h8c4.4,0,8-3.6,8-8S172.4,64,168,64z"/>\
                </g>\
            </svg> \
        </div>\
    </div>\
');

/* --------------- 51 NUMBER 3 LOWERCASE --------------- */
dana_char['d51'] = $('\
    <div class="number c_51">\
        <div class="number_3 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_51">\
                <g class="form f51 square s51 s51_01">\
                    <rect x="16" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_02">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_04">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_05">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_06">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_07">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_08">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_10">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_11">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_12">\
                    <rect x="48" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_13">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_14">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_15">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_16">\
                    <rect x="112" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_17">\
                    <rect x="128" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_18">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_19">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_20">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_21">\
                    <rect x="16" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_22">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_23">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_24">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_25">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_26">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_27">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f51 square s51 s51_28">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f51 path p51 p51_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8h8V0H8z"/>\
                </g>\
                <g class="form f51 path p51 p51_02">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f51 path p51 p51_03">\
                    <path d="M176,16L176,16l-16,0V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f51 path p51 p51_04">\
                    <path d="M24,48c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V48H24z"/>\
                </g>\
                <g class="form f51 path p51 p51_05">\
                    <path d="M160,64V48v-8c0,4.4-3.6,8-8,8h-8v16h8c4.4,0,8,3.6,8,8L160,64L160,64z"/>\
                </g>\
                <g class="form f51 path p51 p51_06">\
                    <path d="M8,96c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V96H8z"/>\
                </g>\
                <g class="form f51 path p51 p51_07">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f51 path p51 p51_08">\
                    <path d="M160,112L160,112l0-16h16C176,104.8,168.8,112,160,112z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 52 NUMBER 4 LOWERCASE --------------- */
dana_char['d52'] = $('\
    <div class="number c_52">\
        <div class="number_4 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_52">\
                <g class="form f52_1 square s52_1 s52_1_01">\
                    <rect y="16" width="16" height="16"/>\
                </g>\
                <g class="form f52 square s52 s52_02">\
                    <rect x="144" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f52 square s52 s52_03">\
                    <rect y="32" width="16" height="16"/>\
                </g>\
                <g class="form f52 square s52 s52_04">\
                    <rect x="144" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f52 square s52 s52_05">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f52 square s52 s52_06">\
                    <rect x="48" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f52 square s52 s52_07">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f52 square s52 s52_08">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f52 square s52 s52_09">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f52 square s52 s52_10">\
                    <rect x="112" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f52 square s52 s52_11">\
                    <rect x="144" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f52 square s52 s52_12">\
                    <rect x="144" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f52 square s52 s52_13">\
                    <rect x="144" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f52 path p52 p52_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8v8h16V8C16,3.6,12.4,0,8,0z"/>\
                </g>\
                <g class="form f52 path p52 p52_02">\
                    <path d="M152,0c-4.4,0-8,3.6-8,8v8h16V8C160,3.6,156.4,0,152,0z"/>\
                </g>\
                <g class="form f52 path p52 p52_03">\
                    <path d="M0,48L0,48h16v16C7.2,64,0,56.8,0,48z"/>\
                </g>\
                <g class="form f52 path p52 p52_04">\
                    <path d="M24,48c-4.4,0-8-3.6-8-8v8v16h16V48H24z"/>\
                </g>\
                <g class="form f52 path p52 p52_05">\
                    <path d="M136,48h-8v16h16V48v-8C144,44.4,140.4,48,136,48z"/>\
                </g>\
                <g class="form f52 path p52 p52_06">\
                    <path d="M168,48h-8v16h8c4.4,0,8-3.6,8-8S172.4,48,168,48z"/>\
                </g>\
                <g class="form f52 path p52 p52_07">\
                    <path d="M144,96v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H144z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 53 NUMBER 5 LOWERCASE --------------- */
dana_char['d53'] = $('\
    <div class="number c_53">\
        <div class="number_5 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_53">\
                <g class="form f53 square s53 s53_01">\
                    <rect x="0" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_02">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_04">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_05">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_06">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_07">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_08">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_09">\
                    <rect x="144" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_10">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_11">\
                    <rect y="32" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_12">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_13">\
                    <rect x="48" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_14">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_15">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_16">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_17">\
                    <rect x="112" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_18">\
                    <rect x="128" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_19">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_20">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_21">\
                    <rect x="16" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_22">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_23">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_24">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_25">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_26">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_27">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f53 square s53 s53_28">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 path p53_1 p53_1_01">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f53 path p53 p53_02">\
                    <path d="M168,0h-8v16h8c4.4,0,8-3.6,8-8S172.4,0,168,0z"/>\
                </g>\
                <g class="form f53 path p53 p53_03">\
                    <path d="M16,64L16,64l0-16H0C0,56.8,7.2,64,16,64z"/>\
                </g>\
                <g class="form f53 path p53 p53_04">\
                    <path d="M24,48c-4.4,0-8-3.6-8-8v8v16h16V48H24z"/>\
                </g>\
                <g class="form f53 path p53 p53_05">\
                    <path d="M144,48v16h8c4.4,0,8,3.6,8,8v-8V48H144z"/>\
                </g>\
                <g class="form f53 path p53 p53_06">\
                    <path d="M160,48L160,48l0,16h16C176,55.2,168.8,48,160,48z"/>\
                </g>\
                <g class="form f53 path p53 p53_07">\
                    <path d="M8,96c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V96H8z"/>\
                </g>\
                <g class="form f53 path p53 p53_08">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f53 path p53 p53_09">\
                    <path d="M176,96L176,96l-16,0v16C168.8,112,176,104.8,176,96z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 54 NUMBER 6 LOWERCASE --------------- */
dana_char['d54'] = $('\
    <div class="number c_54">\
        <div class="number_6 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_54">\
                <g class="form f54 square s54 s54_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_08">\
                    <rect x="144" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_09">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_10">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_11">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_12">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_13">\
                    <rect x="48" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_14">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_15">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_16">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_17">\
                    <rect x="112" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_18">\
                    <rect x="128" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_19">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_20">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_21">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_22">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_23">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_24">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_25">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_26">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_27">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_28">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f54 square s54 s54_29">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f54 path p54 p54_01">\
                    <path d="M0,16L0,16l16,0V0C7.2,0,0,7.2,0,16z"/>\
                </g>\
                <g class="form f54 path p54 p54_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f54 path p54 p54_03">\
                    <path d="M160,0v16c4.4,0,8-3.6,8-8S164.4,0,160,0z"/>\
                </g>\
                <g class="form f54 path p54 p54_04">\
                    <path d="M16,48v16v8c0-4.4,3.6-8,8-8h8V48H16z"/>\
                </g>\
                <g class="form f54 path p54 p54_05">\
                    <path d="M144,48v16h8c4.4,0,8,3.6,8,8v-8V48H144z"/>\
                </g>\
                <g class="form f54 path p54 p54_06">\
                    <path d="M176,64L176,64l-16,0V48C168.8,48,176,55.2,176,64z"/>\
                </g>\
                <g class="form f54 path p54 p54_07">\
                    <path d="M16,112L16,112l0-16H0C0,104.8,7.2,112,16,112z"/>\
                </g>\
                <g class="form f54 path p54 p54_08">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f54 path p54 p54_09">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f54 path p54 p54_10">\
                    <path d="M160,112L160,112l0-16h16C176,104.8,168.8,112,160,112z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 55 NUMBER 7 LOWERCASE --------------- */
dana_char['d55'] = $('\
    <div class="number c_55">\
        <div class="number_7 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_55">\
                <g class="form f55 square s55 s55_01">\
                    <rect x="16" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55 square s55 s55_02">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55 square s55 s55_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55 square s55 s55_04">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55 square s55 s55_05">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55 square s55 s55_06">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55 square s55 s55_07">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55 square s55 s55_08">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55 square s55 s55_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f55 square s55 s55_10">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f55 square s55 s55_11">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f55 square s55 s55_12">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f55 square s55 s55_13">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f55 path p55 p55_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8h8V0H8z"/>\
                </g>\
                <g class="form f55 path p55 p55_02">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f55 path p55 p55_03">\
                    <path d="M176,16L176,16l-16,0V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f55 path p55 p55_04">\
                    <path d="M160,96v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H160z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 56 NUMBER 8 LOWERCASE --------------- */
dana_char['d56'] = $('\
    <div class="number c_56">\
        <div class="number_8 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_56">\
                <g class="form f56 square s56 s56_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_08">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_10">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_11">\
                    <rect x="48" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_12">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_13">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_14">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_15">\
                    <rect x="112" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_16">\
                    <rect x="128" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_17">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_18">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_19">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_20">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_21">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_22">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_23">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_24">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_25">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_26">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f56 square s56 s56_27">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f56 path p56 p56_01">\
                    <path d="M16,0L16,0l0,16H0C0,7.2,7.2,0,16,0z"/>\
                </g>\
                <g class="form f56 path p56 p56_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f56 path p56 p56_03">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f56 path p56 p56_04">\
                    <path d="M160,0L160,0l0,16h16C176,7.2,168.8,0,160,0z"/>\
                </g>\
                <g class="form f56 path p56 p56_05">\
                    <path d="M16,40v-8H0c0,8.8,7.2,16,16,16h0h8C19.6,48,16,44.4,16,40z"/>\
                </g>\
                <g class="form f56 path p56 p56_06">\
                    <path d="M160,32v8c0,4.4-3.6,8-8,8h8h0c8.8,0,16-7.2,16-16H160z"/>\
                </g>\
                <g class="form f56 path p56 p56_07">\
                    <path d="M0,64L0,64l16,0V48C7.2,48,0,55.2,0,64z"/>\
                </g>\
                <g class="form f56 path p56 p56_08">\
                    <path d="M16,48v16v8c0-4.4,3.6-8,8-8h8V48H16z"/>\
                </g>\
                <g class="form f56 path p56 p56_09">\
                    <path d="M144,48v16h8c4.4,0,8,3.6,8,8v-8V48H144z"/>\
                </g>\
                <g class="form f56 path p56 p56_10">\
                    <path d="M176,64L176,64l-16,0V48C168.8,48,176,55.2,176,64z"/>\
                </g>\
                <g class="form f56 path p56 p56_11">\
                    <path d="M0,96L0,96l16,0v16C7.2,112,0,104.8,0,96z"/>\
                </g>\
                <g class="form f56 path p56 p56_12">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f56 path p56 p56_13">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f56 path p56 p56_14">\
                    <path d="M176,96L176,96l-16,0v16C168.8,112,176,104.8,176,96z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 57 NUMBER 9 LOWERCASE --------------- */
dana_char['d57'] = $('\
    <div class="number c_57">\
        <div class="number_9 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_57">\
                <g class="form f57 square s57 s57_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_08">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_10">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_11">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_12">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_13">\
                    <rect x="48" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_14">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_15">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_16">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_17">\
                    <rect x="112" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_18">\
                    <rect x="128" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_19">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_20">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_21">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_22">\
                    <rect x="16" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_23">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_24">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_25">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_26">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_27">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_28">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f57 square s57 s57_29">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f57 path p57 p57_01">\
                    <path d="M16,0L16,0l0,16H0C0,7.2,7.2,0,16,0z"/>\
                </g>\
                <g class="form f57 path p57 p57_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f57 path p57 p57_03">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f57 path p57 p57_04">\
                    <path d="M160,0L160,0l0,16h16C176,7.2,168.8,0,160,0z"/>\
                </g>\
                <g class="form f57 path p57 p57_05">\
                    <path d="M0,48L0,48l16,0v16C7.2,64,0,56.8,0,48z"/>\
                </g>\
                <g class="form f57 path p57 p57_06">\
                    <path d="M24,48c-4.4,0-8-3.6-8-8v8v16h16V48H24z"/>\
                </g>\
                <g class="form f57 path p57 p57_07">\
                    <path d="M152,48h-8v16h16V48v-8C160,44.4,156.4,48,152,48z"/>\
                </g>\
                <g class="form f57 path p57 p57_08">\
                    <path d="M16,112V96c-4.4,0-8,3.6-8,8S11.6,112,16,112z"/>\
                </g>\
                <g class="form f57 path p57 p57_09">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f57 path p57 p57_10">\
                    <path d="M176,96L176,96l-16,0v16C168.8,112,176,104.8,176,96z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 48_1 NUMBER 0 UPPERCASE --------------- */
dana_char['d48_1'] = $('\
    <div class="number c_48_1">\
        <div class="number_0_1 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_48_1">\
                <g class="form f48_1 square s48_1 s48_1_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_08">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_10">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_11">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_12">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_13">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_14">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_15">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_16">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_17">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_18">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_19">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_20">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_21">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_22">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_23">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 square s48_1 s48_1_24">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f48_1 path p48_1 p48_1_01">\
                    <path d="M0,16L0,16l16,0V0C7.2,0,0,7.2,0,16z"/>\
                </g>\
                <g class="form f48_1 path p48_1 p48_1_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f48_1 path p48_1 p48_1_03">\
                    <path d="M160,0v16v8c0-4.4-3.6-8-8-8h-8V0L160,0z"/>\
                </g>\
                <g class="form f48_1 path p48_1 p48_1_04">\
                    <path d="M176,16L176,16l-16,0V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f48_1 path p48_1 p48_1_05">\
                    <path d="M16,112L16,112l0-16H0C0,104.8,7.2,112,16,112z"/>\
                </g>\
                <g class="form f48_1 path p48_1 p48_1_06">\
                    <path d="M16,112V96v-8c0,4.4,3.6,8,8,8h8v16H16z"/>\
                </g>\
                <g class="form f48_1 path p48_1 p48_1_07">\
                    <path d="M160,112V96v-8c0,4.4-3.6,8-8,8h-8v16H160z"/>\
                </g>\
                <g class="form f48_1 path p48_1 p48_1_08">\
                    <path d="M160,112L160,112l0-16h16C176,104.8,168.8,112,160,112z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 49_1 NUMBER 1 UPPERCASE --------------- */
dana_char['d49_1'] = $('\
    <div class="number c_49_1">\
        <div class="number_1_1 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_49_1">\
                <g class="form f49_1 square s49_1 s49_1_01">\
                    <rect x="16" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_02">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_04">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_05">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_06">\
                    <rect x="96" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_07">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_08">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_09">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_10">\
                    <rect x="96" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_11">\
                    <rect x="16" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_12">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_13">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_14">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_15">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_16">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_17">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_18">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 square s49_1 s49_1_19">\
                    <rect x="144" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f49_1 path p49_1 p49_1_01">\
                    <path d="M16,16V0c-4.4,0-8,3.6-8,8S11.6,16,16,16z"/>\
                </g>\
                <g class="form f49_1 path p49_1 p49_1_02">\
                    <path d="M112,16L112,16l-16,0V0C104.8,0,112,7.2,112,16z"/>\
                </g>\
                <g class="form f49_1 path p49_1 p49_1_03">\
                    <path d="M8,96c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V96H8z"/>\
                </g>\
                <g class="form f49_1 path p49_1 p49_1_04">\
                    <path d="M168,112c4.4,0,8-3.6,8-8s-3.6-8-8-8h-8v16H168z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 50_1 NUMBER 2 UPPERCASE --------------- */
dana_char['d50_1'] = $('\
    <div class="number c_50_1">\
        <div class="number_2_1 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_50_1">\
                <g class="form f50_1 square s50_1 s50_1_01">\
                    <rect x="16" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_02">\
                    <rect x="32" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_03">\
                    <rect x="48" class="st0" width="16" height="16"/>\
                </g>                            \
                <g class="form f50_1 square s50_1 s50_1_04">\
                    <rect x="64" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_05">\
                    <rect x="80" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_06">\
                    <rect x="96" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_07">\
                    <rect x="112" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_08">\
                    <rect x="128" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_09">\
                    <rect x="160" y="16" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_10">\
                    <rect x="160" y="32" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_11">\
                    <rect x="32" y="48" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_12">\
                    <rect x="48" y="48" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_13">\
                    <rect x="64" y="48" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_14">\
                    <rect x="80" y="48" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_15">\
                    <rect x="96" y="48" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_16">\
                    <rect x="112" y="48" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_17">\
                    <rect x="128" y="48" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_18">\
                    <rect y="64" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_19">\
                    <rect y="80" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_20">\
                    <rect y="96" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_21">\
                    <rect x="32" y="96" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_22">\
                    <rect x="48" y="96" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_23">\
                    <rect x="64" y="96" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_24">\
                    <rect x="80" y="96" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_25">\
                    <rect x="96" y="96" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_26">\
                    <rect x="112" y="96" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_27">\
                    <rect x="128" y="96" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 square s50_1 s50_1_28">\
                    <rect x="144" y="96" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f50_1 path p50_1 p50_1_01">\
                    <path class="st0" d="M8,16c-4.4,0-8-3.6-8-8s3.6-8,8-8h8v16H8z"/>\
                </g>\
                <g class="form f50_1 path p50_1 p50_1_02">\
                    <path class="st0" d="M160,0v16v8c0-4.4-3.6-8-8-8h-8V0H160z"/>\
                </g>\
                <g class="form f50_1 path p50_1 p50_1_03">\
                    <path class="st0" d="M176,16L176,16h-16V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f50_1 path p50_1 p50_1_04">\
                    <path class="st0" d="M16,48L16,48v16H0C0,55.2,7.2,48,16,48z"/>\
                </g>\
                <g class="form f50_1 path p50_1 p50_1_05">\
                    <path class="st0" d="M16,48v16v8c0-4.4,3.6-8,8-8h8V48H16z"/>\
                </g>\
                <g class="form f50_1 path p50_1 p50_1_06">\
                    <path class="st0" d="M160,64V48v-8c0,4.4-3.6,8-8,8h-8v16H160z"/>\
                </g>\
                <g class="form f50_1 path p50_1 p50_1_07">\
                    <path class="st0" d="M160,64L160,64V48h16C176,56.8,168.8,64,160,64z"/>\
                </g>\
                <g class="form f50_1 path p50_1 p50_1_08">\
                    <path class="st0" d="M16,112V96v-8c0,4.4,3.6,8,8,8h8v16H16z"/>\
                </g>\
                <g class="form f50_1 path p50_1 p50_1_09">\
                    <path class="st0" d="M168,112c4.4,0,8-3.6,8-8s-3.6-8-8-8h-8v16H168z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 51_1 NUMBER 3 UPPERCASE --------------- */
dana_char['d51_1'] = $('\
    <div class="number c_51_1">\
        <div class="number_3_1 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_51_1">\
                <g class="form f51_1 square s51_1 s51_1_01">\
                    <rect x="16" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_02">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_04">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_05">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_06">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_07">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_08">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_10">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_11">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_12">\
                    <rect x="48" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_13">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_14">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_15">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_16">\
                    <rect x="112" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_17">\
                    <rect x="128" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_18">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_19">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_20">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_21">\
                    <rect x="16" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_22">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_23">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_24">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_25">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_26">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_27">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 square s51_1 s51_1_28">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f51_1 path p51_1 p51_1_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8h8V0H8z"/>\
                </g>\
                <g class="form f51_1 path p51_1 p51_1_02">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f51_1 path p51_1 p51_1_03">\
                    <path d="M176,16L176,16l-16,0V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f51_1 path p51_1 p51_1_04">\
                    <path d="M24,48c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V48H24z"/>\
                </g>\
                <g class="form f51_1 path p51_1 p51_1_05">\
                    <path d="M160,64V48v-8c0,4.4-3.6,8-8,8h-8v16h8c4.4,0,8,3.6,8,8L160,64L160,64z"/>\
                </g>\
                <g class="form f51_1 path p51_1 p51_1_06">\
                    <path d="M8,96c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V96H8z"/>\
                </g>\
                <g class="form f51_1 path p51_1 p51_1_07">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f51_1 path p51_1 p51_1_08">\
                    <path d="M160,112L160,112l0-16h16C176,104.8,168.8,112,160,112z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 52_1 NUMBER 4 UPPERCASE --------------- */
dana_char['d52_1'] = $('\
    <div class="number c_52_1">\
        <div class="number_4_1 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_52_1">\
                <g class="form f52_1 square s52_1 s52_1_01">\
                    <rect y="16" width="16" height="16"/>\
                </g>\
                <g class="form f52_1 square s52_1 s52_1_02">\
                    <rect x="144" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f52_1 square s52_1 s52_1_03">\
                    <rect y="32" width="16" height="16"/>\
                </g>\
                <g class="form f52_1 square s52_1 s52_1_04">\
                    <rect x="144" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f52_1 square s52_1 s52_1_05">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f52_1 square s52_1 s52_1_06">\
                    <rect x="48" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f52_1 square s52_1 s52_1_07">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f52_1 square s52_1 s52_1_08">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f52_1 square s52_1 s52_1_09">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f52_1 square s52_1 s52_1_10">\
                    <rect x="112" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f52_1 square s52_1 s52_1_11">\
                    <rect x="144" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f52_1 square s52_1 s52_1_12">\
                    <rect x="144" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f52_1 square s52_1 s52_1_13">\
                    <rect x="144" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f52_1 path p52_1 p52_1_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8v8h16V8C16,3.6,12.4,0,8,0z"/>\
                </g>\
                <g class="form f52_1 path p52_1 p52_1_02">\
                    <path d="M152,0c-4.4,0-8,3.6-8,8v8h16V8C160,3.6,156.4,0,152,0z"/>\
                </g>\
                <g class="form f52_1 path p52_1 p52_1_03">\
                    <path d="M0,48L0,48h16v16C7.2,64,0,56.8,0,48z"/>\
                </g>\
                <g class="form f52_1 path p52_1 p52_1_04">\
                    <path d="M24,48c-4.4,0-8-3.6-8-8v8v16h16V48H24z"/>\
                </g>\
                <g class="form f52_1 path p52_1 p52_1_05">\
                    <path d="M136,48h-8v16h16V48v-8C144,44.4,140.4,48,136,48z"/>\
                </g>\
                <g class="form f52_1 path p52_1 p52_1_06">\
                    <path d="M168,48h-8v16h8c4.4,0,8-3.6,8-8S172.4,48,168,48z"/>\
                </g>\
                <g class="form f52_1 path p52_1 p52_1_07">\
                    <path d="M144,96v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H144z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 53_1 NUMBER 5 UPPERCASE --------------- */
dana_char['d53_1'] = $('\
    <div class="number c_53_1">\
        <div class="number_5_1 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_53_1">\
                <g class="form f53_1 square s53_1 s53_1_01">\
                    <rect x="0" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_02">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_04">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_05">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_06">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_07">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_08">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_09">\
                    <rect x="144" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_10">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_11">\
                    <rect y="32" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_12">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_13">\
                    <rect x="48" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_14">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_15">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_16">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_17">\
                    <rect x="112" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_18">\
                    <rect x="128" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_19">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_20">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_21">\
                    <rect x="16" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_22">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_23">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_24">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_25">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_26">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_27">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 square s53_1 s53_1_28">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f53_1 path p53_1 p53_1_01">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f53_1 path p53_1 p53_1_02">\
                    <path d="M168,0h-8v16h8c4.4,0,8-3.6,8-8S172.4,0,168,0z"/>\
                </g>\
                <g class="form f53_1 path p53_1 p53_1_03">\
                    <path d="M16,64L16,64l0-16H0C0,56.8,7.2,64,16,64z"/>\
                </g>\
                <g class="form f53_1 path p53_1 p53_1_04">\
                    <path d="M24,48c-4.4,0-8-3.6-8-8v8v16h16V48H24z"/>\
                </g>\
                <g class="form f53_1 path p53_1 p53_1_05">\
                    <path d="M144,48v16h8c4.4,0,8,3.6,8,8v-8V48H144z"/>\
                </g>\
                <g class="form f53_1 path p53_1 p53_1_06">\
                    <path d="M160,48L160,48l0,16h16C176,55.2,168.8,48,160,48z"/>\
                </g>\
                <g class="form f53_1 path p53_1 p53_1_07">\
                    <path d="M8,96c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V96H8z"/>\
                </g>\
                <g class="form f53_1 path p53_1 p53_1_08">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f53_1 path p53_1 p53_1_09">\
                    <path d="M176,96L176,96l-16,0v16C168.8,112,176,104.8,176,96z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 54_1 NUMBER 6 UPPERCASE --------------- */
dana_char['d54_1'] = $('\
    <div class="number c_54_1">\
        <div class="number_6_1 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_54_1">\
                <g class="form f54_1 square s54_1 s54_1_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_08">\
                    <rect x="144" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_09">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_10">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_11">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_12">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_13">\
                    <rect x="48" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_14">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_15">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_16">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_17">\
                    <rect x="112" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_18">\
                    <rect x="128" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_19">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_20">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_21">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_22">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_23">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_24">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_25">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_26">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_27">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_28">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 square s54_1 s54_1_29">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f54_1 path p54_1 p54_1_01">\
                    <path d="M0,16L0,16l16,0V0C7.2,0,0,7.2,0,16z"/>\
                </g>\
                <g class="form f54_1 path p54_1 p54_1_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f54_1 path p54_1 p54_1_03">\
                    <path d="M160,0v16c4.4,0,8-3.6,8-8S164.4,0,160,0z"/>\
                </g>\
                <g class="form f54_1 path p54_1 p54_1_04">\
                    <path d="M16,48v16v8c0-4.4,3.6-8,8-8h8V48H16z"/>\
                </g>\
                <g class="form f54_1 path p54_1 p54_1_05">\
                    <path d="M144,48v16h8c4.4,0,8,3.6,8,8v-8V48H144z"/>\
                </g>\
                <g class="form f54_1 path p54_1 p54_1_06">\
                    <path d="M176,64L176,64l-16,0V48C168.8,48,176,55.2,176,64z"/>\
                </g>\
                <g class="form f54_1 path p54_1 p54_1_07">\
                    <path d="M16,112L16,112l0-16H0C0,104.8,7.2,112,16,112z"/>\
                </g>\
                <g class="form f54_1 path p54_1 p54_1_08">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f54_1 path p54_1 p54_1_09">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f54_1 path p54_1 p54_1_10">\
                    <path d="M160,112L160,112l0-16h16C176,104.8,168.8,112,160,112z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 55_1 NUMBER 7 UPPERCASE --------------- */
dana_char['d55_1'] = $('\
    <div class="number c_55_1">\
        <div class="number_7_ ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_55_1">\
                <g class="form f55_1 square s55_1 s55_1_01">\
                    <rect x="16" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55_1 square s55_1 s55_1_02">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55_1 square s55_1 s55_1_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55_1 square s55_1 s55_1_04">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55_1 square s55_1 s55_1_05">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55_1 square s55_1 s55_1_06">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55_1 square s55_1 s55_1_07">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55_1 square s55_1 s55_1_08">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55_1 square s55_1 s55_1_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f55_1 square s55_1 s55_1_10">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f55_1 square s55_1 s55_1_11">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f55_1 square s55_1 s55_1_12">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f55_1 square s55_1 s55_1_13">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f55_1 path p55_1 p55_1_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8h8V0H8z"/>\
                </g>\
                <g class="form f55_1 path p55_1 p55_1_02">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f55_1 path p55_1 p55_1_03">\
                    <path d="M176,16L176,16l-16,0V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f55_1 path p55_1 p55_1_04">\
                    <path d="M160,96v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H160z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 56_1 NUMBER 8 UPPERCASE --------------- */
dana_char['d56_1'] = $('\
    <div class="number c_56_1">\
        <div class="number_8_ ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_56_1">\
                <g class="form f56_1 square s56_1 s56_1_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_08">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_10">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_11">\
                    <rect x="48" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_12">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_13">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_14">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_15">\
                    <rect x="112" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_16">\
                    <rect x="128" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_17">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_18">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_19">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_20">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_21">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_22">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_23">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_24">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_25">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_26">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 square s56_1 s56_1_27">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f56_1 path p56_1 p56_1_01">\
                    <path d="M16,0L16,0l0,16H0C0,7.2,7.2,0,16,0z"/>\
                </g>\
                <g class="form f56_1 path p56_1 p56_1_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f56_1 path p56_1 p56_1_03">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f56_1 path p56_1 p56_1_04">\
                    <path d="M160,0L160,0l0,16h16C176,7.2,168.8,0,160,0z"/>\
                </g>\
                <g class="form f56_1 path p56_1 p56_1_05">\
                    <path d="M16,40v-8H0c0,8.8,7.2,16,16,16h0h8C19.6,48,16,44.4,16,40z"/>\
                </g>\
                <g class="form f56_1 path p56_1 p56_1_06">\
                    <path d="M160,32v8c0,4.4-3.6,8-8,8h8h0c8.8,0,16-7.2,16-16H160z"/>\
                </g>\
                <g class="form f56_1 path p56_1 p56_1_07">\
                    <path d="M0,64L0,64l16,0V48C7.2,48,0,55.2,0,64z"/>\
                </g>\
                <g class="form f56_1 path p56_1 p56_1_08">\
                    <path d="M16,48v16v8c0-4.4,3.6-8,8-8h8V48H16z"/>\
                </g>\
                <g class="form f56_1 path p56_1 p56_1_09">\
                    <path d="M144,48v16h8c4.4,0,8,3.6,8,8v-8V48H144z"/>\
                </g>\
                <g class="form f56_1 path p56_1 p56_1_10">\
                    <path d="M176,64L176,64l-16,0V48C168.8,48,176,55.2,176,64z"/>\
                </g>\
                <g class="form f56_1 path p56_1 p56_1_11">\
                    <path d="M0,96L0,96l16,0v16C7.2,112,0,104.8,0,96z"/>\
                </g>\
                <g class="form f56_1 path p56_1 p56_1_12">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f56_1 path p56_1 p56_1_13">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f56_1 path p56_1 p56_1_14">\
                    <path d="M176,96L176,96l-16,0v16C168.8,112,176,104.8,176,96z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 57_1 NUMBER 9 UPPERCASE --------------- */
dana_char['d57_1'] = $('\
    <div class="number c_57_1">\
        <div class="number_9_1 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_57_1">\
                <g class="form f57_1 square s57_1 s57_1_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_08">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_10">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_11">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_12">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_13">\
                    <rect x="48" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_14">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_15">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_16">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_17">\
                    <rect x="112" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_18">\
                    <rect x="128" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_19">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_20">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_21">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_22">\
                    <rect x="16" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_23">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_24">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_25">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_26">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_27">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_28">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 square s57_1 s57_1_29">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f57_1 path p57_1 p57_1_01">\
                    <path d="M16,0L16,0l0,16H0C0,7.2,7.2,0,16,0z"/>\
                </g>\
                <g class="form f57_1 path p57_1 p57_1_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f57_1 path p57_1 p57_1_03">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f57_1 path p57_1 p57_1_04">\
                    <path d="M160,0L160,0l0,16h16C176,7.2,168.8,0,160,0z"/>\
                </g>\
                <g class="form f57_1 path p57_1 p57_1_05">\
                    <path d="M0,48L0,48l16,0v16C7.2,64,0,56.8,0,48z"/>\
                </g>\
                <g class="form f57_1 path p57_1 p57_1_06">\
                    <path d="M24,48c-4.4,0-8-3.6-8-8v8v16h16V48H24z"/>\
                </g>\
                <g class="form f57_1 path p57_1 p57_1_07">\
                    <path d="M152,48h-8v16h16V48v-8C160,44.4,156.4,48,152,48z"/>\
                </g>\
                <g class="form f57_1 path p57_1 p57_1_08">\
                    <path d="M16,112V96c-4.4,0-8,3.6-8,8S11.6,112,16,112z"/>\
                </g>\
                <g class="form f57_1 path p57_1 p57_1_09">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f57_1 path p57_1 p57_1_10">\
                    <path d="M176,96L176,96l-16,0v16C168.8,112,176,104.8,176,96z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 48_2 NUMBER 0 XHEIGHT --------------- */
dana_char['d48_2'] = $('\
    <div class="number c_48_2">\
        <div class="number_0_2 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_48_2">\
                <g class="form f48_2 square s48_2 s48_2_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_08">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_10">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_11">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_12">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_13">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_14">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_15">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_16">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_17">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_18">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_19">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 square s48_2 s48_2_20">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f48_2 path p48_2 p48_2_01">\
                    <path d="M0,16L0,16l16,0V0C7.2,0,0,7.2,0,16z"/>\
                </g>\
                <g class="form f48_2 path p48_2 p48_2_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f48_2 path p48_2 p48_2_03">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f48_2 path p48_2 p48_2_04">\
                    <path d="M176,16L176,16l-16,0V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f48_2 path p48_2 p48_2_05">\
                    <path d="M16,80L16,80l0-16H0C0,72.8,7.2,80,16,80z"/>\
                </g>\
                <g class="form f48_2 path p48_2 p48_2_06">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g class="form f48_2 path p48_2 p48_2_07">\
                    <path d="M152,64h-8v16h16V64v-8C160,60.4,156.4,64,152,64z"/>\
                </g>\
                <g class="form f48_2 path p48_2 p48_2_08">\
                    <path d="M160,80L160,80l0-16h16C176,72.8,168.8,80,160,80z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 49_2 NUMBER 1 SMALLCAPS --------------- */
dana_char['d49_2'] = $('\
    <div class="number c_49_2">\
        <div class="number_1_2 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_49_2">\
                <g class="form f49_2 square s49_2 s49_2_01">\
                    <rect x="16" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f49_2 square s49_2 s49_2_02">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f49_2 square s49_2 s49_2_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f49_2 square s49_2 s49_2_04">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f49_2 square s49_2 s49_2_05">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f49_2 square s49_2 s49_2_06">\
                    <rect x="96" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f49_2 square s49_2 s49_2_07">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f49_2 square s49_2 s49_2_08">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f49_2 square s49_2 s49_2_09">\
                    <rect x="16" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49_2 square s49_2 s49_2_10">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49_2 square s49_2 s49_2_11">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49_2 square s49_2 s49_2_12">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49_2 square s49_2 s49_2_13">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49_2 square s49_2 s49_2_14">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49_2 square s49_2 s49_2_15">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49_2 square s49_2 s49_2_16">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49_2 square s49_2 s49_2_17">\
                    <rect x="144" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f49_2 path p49_2 p49_2_01">\
                    <path d="M16,16V0c-4.4,0-8,3.6-8,8S11.6,16,16,16z"/>\
                </g>\
                <g class="form f49_2 path p49_2 p49_2_02">\
                    <path d="M112,16L112,16l-16,0V0C104.8,0,112,7.2,112,16z"/>\
                </g>\
                <g class="form f49_2 path p49_2 p49_2_03">\
                    <path d="M8,64c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V64H8z"/>\
                </g>\
                <g class="form f49_2 path p49_2 p49_2_04">\
                    <path d="M168,64h-8v16h8c4.4,0,8-3.6,8-8S172.4,64,168,64z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 50_2 NUMBER 2 SMALLCAPS --------------- */
dana_char['d50_2'] = $('\
    <div class="number c_50_2">\
        <div class="number_2_2 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_50_2">\
                <g class="form f50_2 square s50_2 s50_2_01">\
                    <rect x="16" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_02">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>                            \
                <g class="form f50_2 square s50_2 s50_2_04">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_05">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_06">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_07">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_08">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_10">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_11">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_12">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_13">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_14">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_15">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_16">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_17">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_18">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_19">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_20">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_21">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_22">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_23">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_24">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_25">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 square s50_2 s50_2_26">\
                    <rect x="144" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f50_2 path p50_2 p50_2_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8h8V0H8z"/>\
                </g>\
                <g class="form f50_2 path p50_2 p50_2_02">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f50_2 path p50_2 p50_2_03">\
                    <path d="M176,16L176,16l-16,0V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f50_2 path p50_2 p50_2_04">\
                    <path d="M16,32L16,32l0,16H0C0,39.2,7.2,32,16,32z"/>\
                </g>\
                <g class="form f50_2 path p50_2 p50_2_05">\
                    <path d="M16,32v16v8c0-4.4,3.6-8,8-8h8V32H16z"/>\
                </g>\
                <g class="form f50_2 path p50_2 p50_2_06">\
                    <path d="M152,32h-8v16h16V32v-8C160,28.4,156.4,32,152,32z"/>\
                </g>\
                <g class="form f50_2 path p50_2 p50_2_07">\
                    <path d="M160,48L160,48l0-16h16C176,40.8,168.8,48,160,48z"/>\
                </g>\
                <g class="form f50_2 path p50_2 p50_2_08">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g class="form f50_2 path p50_2 p50_2_09">\
                    <path d="M168,64h-8v16h8c4.4,0,8-3.6,8-8S172.4,64,168,64z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 51_2 NUMBER 3 SMALLCAPS --------------- */
dana_char['d51_2'] = $('\
    <div class="number c_51_2">\
        <div class="number_3_2 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_51_2">\
                <g class="form f51_2 square s51_2 s51_2_01">\
                    <rect x="16" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_02">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_04">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_05">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_06">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_07">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_08">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_10">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_11">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_12">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_13">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_14">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_15">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_16">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_17">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_18">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_19">\
                    <rect x="16" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_20">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_21">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_22">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_23">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_24">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_25">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 square s51_2 s51_2_26">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f51_2 path p51_2 p51_2_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8h8V0H8z"/>\
                </g>\
                <g class="form f51_2 path p51_2 p51_2_02">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f51_2 path p51_2 p51_2_03">\
                    <path d="M176,16L176,16l-16,0V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f51_2 path p51_2 p51_2_04">\
                    <path d="M24,32c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V32H24z"/>\
                </g>\
                <g class="form f51_2 path p51_2 p51_2_05">\
                    <path d="M160,48V32v-8c0,4.4-3.6,8-8,8h-8v16h8c4.4,0,8,3.6,8,8L160,48L160,48z"/>\
                </g>\
                <g class="form f51_2 path p51_2 p51_2_06">\
                    <path d="M8,64c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V64H8z"/>\
                </g>\
                <g class="form f51_2 path p51_2 p51_2_07">\
                    <path d="M152,64h-8v16h16V64v-8C160,60.4,156.4,64,152,64z"/>\
                </g>\
                <g class="form f51_2 path p51_2 p51_2_08">\
                    <path d="M160,80L160,80l0-16h16C176,72.8,168.8,80,160,80z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 52_2 NUMBER 4 SMALLCAPS --------------- */
dana_char['d52_2'] = $('\
    <div class="number c_52_2">\
        <div class="number_4_2 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_52_2">\
                <g class="form f52_2 square s52_2 s52_2_01">\
                    <rect y="16" width="16" height="16"/>\
                </g>\
                <g class="form f52_2 square s52_2 s52_2_02">\
                    <rect x="144" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f52_2 square s52_2 s52_2_03">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f52_2 square s52_2 s52_2_04">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f52_2 square s52_2 s52_2_05">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f52_2 square s52_2 s52_2_06">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f52_2 square s52_2 s52_2_07">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f52_2 square s52_2 s52_2_08">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f52_2 square s52_2 s52_2_09">\
                    <rect x="144" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f52_2 square s52_2 s52_2_10">\
                    <rect x="144" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f52_2 path p52_2 p52_2_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8v8h16V8C16,3.6,12.4,0,8,0z"/>\
                </g>\
                <g class="form f52_2 path p52_2 p52_2_02">\
                    <path d="M152,0c-4.4,0-8,3.6-8,8v8h16V8C160,3.6,156.4,0,152,0z"/>\
                </g>\
                <g class="form f52_2 path p52_2 p52_2_03">\
                    <path d="M0,32L0,32h16v16C7.2,48,0,40.8,0,32z"/>\
                </g>\
                <g class="form f52_2 path p52_2 p52_2_04">\
                    <path d="M24,32c-4.4,0-8-3.6-8-8v8v16h16V32H24z"/>\
                </g>\
                <g class="form f52_2 path p52_2 p52_2_05">\
                    <path d="M136,32h-8v16h16V32v-8C144,28.4,140.4,32,136,32z"/>\
                </g>\
                <g class="form f52_2 path p52_2 p52_2_06">\
                    <path d="M168,32h-8v16h8c4.4,0,8-3.6,8-8S172.4,32,168,32z"/>\
                </g>\
                <g class="form f52_2 path p52_2 p52_2_07">\
                    <path d="M144,64v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H144z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 53_2 NUMBER 5 SMALLCAPS --------------- */
dana_char['d53_2'] = $('\
    <div class="number c_53_2">\
        <div class="number_5_2 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_53_2">\
                <g class="form f53_2 square s53_2 s53_2_01">\
                    <rect x="0" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_02">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_04">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_05">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_06">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_07">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_08">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_09">\
                    <rect x="144" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_10">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_11">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_12">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_13">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_14">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_15">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_16">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_17">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_18">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_19">\
                    <rect x="16" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_20">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_21">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_22">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_23">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_24">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_25">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 square s53_2 s53_2_26">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f53_2 path p53_2 p53_2_01">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f53_2 path p53_2 p53_2_02">\
                    <path d="M168,0h-8v16h8c4.4,0,8-3.6,8-8S172.4,0,168,0z"/>\
                </g>\
                <g class="form f53_2 path p53_2 p53_2_03">\
                    <path d="M16,48L16,48l0-16H0C0,40.8,7.2,48,16,48z"/>\
                </g>\
                <g class="form f53_2 path p53_2 p53_2_04">\
                    <path d="M24,32c-4.4,0-8-3.6-8-8v8v16h16V32H24z"/>\
                </g>\
                <g class="form f53_2 path p53_2 p53_2_05">\
                    <path d="M144,32v16h8c4.4,0,8,3.6,8,8v-8V32H144z"/>\
                </g>\
                <g class="form f53_2 path p53_2 p53_2_06">\
                    <path d="M160,32L160,32l0,16h16C176,39.2,168.8,32,160,32z"/>\
                </g>\
                <g class="form f53_2 path p53_2 p53_2_07">\
                    <path d="M8,64c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V64H8z"/>\
                </g>\
                <g class="form f53_2 path p53_2 p53_2_08">\
                    <path d="M152,64h-8v16h16V64v-8C160,60.4,156.4,64,152,64z"/>\
                </g>\
                <g class="form f53_2 path p53_2 p53_2_09">\
                    <path d="M176,64L176,64l-16,0v16C168.8,80,176,72.8,176,64z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 54_2 NUMBER 6 SMALLCAPS --------------- */
dana_char['d54_2'] = $('\
    <div class="number c_54_2">\
        <div class="number_6_2 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_54_2">\
                <g class="form f54_2 square s54_2 s54_2_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_08">\
                    <rect x="144" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_09">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_10">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_11">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_12">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_13">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_14">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_15">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_16">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_17">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_18">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_19">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_20">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_21">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_22">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_23">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_24">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_25">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 square s54_2 s54_2_26">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f54_2 path p54_2 p54_2_01">\
                    <path d="M0,16L0,16l16,0V0C7.2,0,0,7.2,0,16z"/>\
                </g>\
                <g class="form f54_2 path p54_2 p54_2_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f54_2 path p54_2 p54_2_03">\
                    <path d="M160,0v16c4.4,0,8-3.6,8-8S164.4,0,160,0z"/>\
                </g>\
                <g class="form f54_2 path p54_2 p54_2_04">\
                    <path d="M16,32v16v8c0-4.4,3.6-8,8-8h8V32H16z"/>\
                </g>\
                <g class="form f54_2 path p54_2 p54_2_05">\
                    <path d="M144,32v16h8c4.4,0,8,3.6,8,8v-8V32H144z"/>\
                </g>\
                <g class="form f54_2 path p54_2 p54_2_06">\
                    <path d="M176,48L176,48l-16,0V32C168.8,32,176,39.2,176,48z"/>\
                </g>\
                <g class="form f54_2 path p54_2 p54_2_07">\
                    <path d="M16,80L16,80l0-16H0C0,72.8,7.2,80,16,80z"/>\
                </g>\
                <g class="form f54_2 path p54_2 p54_2_08">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g class="form f54_2 path p54_2 p54_2_09">\
                    <path d="M152,64h-8v16h16V64v-8C160,60.4,156.4,64,152,64z"/>\
                </g>\
                <g class="form f54_2 path p54_2 p54_2_10">\
                    <path d="M160,80L160,80l0-16h16C176,72.8,168.8,80,160,80z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 55_2 NUMBER 7 SMALLCAPS --------------- */
dana_char['d55_2'] = $('\
    <div class="number c_55_2">\
        <div class="number_7_2 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_55_2">\
                <g class="form f55_2 square s55_2 s55_2_01">\
                    <rect x="16" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55_2 square s55_2 s55_2_02">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55_2 square s55_2 s55_2_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55_2 square s55_2 s55_2_04">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55_2 square s55_2 s55_2_05">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55_2 square s55_2 s55_2_06">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55_2 square s55_2 s55_2_07">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55_2 square s55_2 s55_2_08">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f55_2 square s55_2 s55_2_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f55_2 square s55_2 s55_2_10">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f55_2 square s55_2 s55_2_11">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f55_2 path p55_2 p55_2_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8h8V0H8z"/>\
                </g>\
                <g class="form f55_2 path p55_2 p55_2_02">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f55_2 path p55_2 p55_2_03">\
                    <path d="M176,16L176,16l-16,0V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f55_2 path p55_2 p55_2_04">\
                    <path d="M160,64v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H160z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 56_2 NUMBER 8 SMALLCAPS --------------- */
dana_char['d56_2'] = $('\
    <div class="number c_56_2">\
        <div class="number_8_2 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_56_2">\
                <g class="form f56_2 square s56_2 s56_2_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_08">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_09">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_10">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_11">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_12">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_13">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_14">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_15">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_16">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_17">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_18">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_19">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_20">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_21">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_22">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 square s56_2 s56_2_23">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f56_2 path p56_2 p56_2_01">\
                    <path d="M16,0L16,0l0,16H0C0,7.2,7.2,0,16,0z"/>\
                </g>\
                <g class="form f56_2 path p56_2 p56_2_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f56_2 path p56_2 p56_2_03">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f56_2 path p56_2 p56_2_04">\
                    <path d="M160,0L160,0l0,16h16C176,7.2,168.8,0,160,0z"/>\
                </g>\
                <g class="form f56_2 path p56_2 p56_2_05">\
                    <path d="M16,24v-8H0c0,8.8,7.2,16,16,16h0h8C19.6,32,16,28.4,16,24z"/>\
                </g>\
                <g class="form f56_2 path p56_2 p56_2_06">\
                    <path d="M160,16v8c0,4.4-3.6,8-8,8h8h0c8.8,0,16-7.2,16-16H160z"/>\
                </g>\
                <g class="form f56_2 path p56_2 p56_2_07">\
                    <path d="M0,48L0,48l16,0V32C7.2,32,0,39.2,0,48z"/>\
                </g>\
                <g class="form f56_2 path p56_2 p56_2_08">\
                    <path d="M16,32v16v8c0-4.4,3.6-8,8-8h8V32H16z"/>\
                </g>\
                <g class="form f56_2 path p56_2 p56_2_09">\
                    <path d="M144,32v16h8c4.4,0,8,3.6,8,8v-8V32H144z"/>\
                </g>\
                <g class="form f56_2 path p56_2 p56_2_10">\
                    <path d="M176,48L176,48l-16,0V32C168.8,32,176,39.2,176,48z"/>\
                </g>\
                <g class="form f56_2 path p56_2 p56_2_11">\
                    <path d="M0,64L0,64l16,0v16C7.2,80,0,72.8,0,64z"/>\
                </g>\
                <g class="form f56_2 path p56_2 p56_2_12">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g class="form f56_2 path p56_2 p56_2_13">\
                    <path d="M152,64h-8v16h16V64v-8C160,60.4,156.4,64,152,64z"/>\
                </g>\
                <g class="form f56_2 path p56_2 p56_2_14">\
                    <path d="M176,64L176,64l-16,0v16C168.8,80,176,72.8,176,64z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 57_2 NUMBER 9 SMALLCAPS --------------- */
dana_char['d57_2'] = $('\
    <div class="number c_57_2">\
        <div class="number_9_2 xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_57_2">\
                <g class="form f57_2 square s57_2 s57_2_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_08">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_10">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_11">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_12">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_13">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_14">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_15">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_16">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_17">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_18">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_19">\
                    <rect x="16" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_20">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_21">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_22">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_23">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_24">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_25">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 square s57_2 s57_2_26">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f57_2 path p57_2 p57_2_01">\
                    <path d="M16,0L16,0l0,16H0C0,7.2,7.2,0,16,0z"/>\
                </g>\
                <g class="form f57_2 path p57_2 p57_2_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f57_2 path p57_2 p57_2_03">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f57_2 path p57_2 p57_2_04">\
                    <path d="M160,0L160,0l0,16h16C176,7.2,168.8,0,160,0z"/>\
                </g>\
                <g class="form f57_2 path p57_2 p57_2_05">\
                    <path d="M0,32L0,32l16,0v16C7.2,48,0,40.8,0,32z"/>\
                </g>\
                <g class="form f57_2 path p57_2 p57_2_06">\
                    <path d="M24,32c-4.4,0-8-3.6-8-8v8v16h16V32H24z"/>\
                </g>\
                <g class="form f57_2 path p57_2 p57_2_07">\
                    <path d="M152,32h-8v16h16V32v-8C160,28.4,156.4,32,152,32z"/>\
                </g>\
                <g class="form f57_2 path p57_2 p57_2_08">\
                    <path d="M16,80V64c-4.4,0-8,3.6-8,8S11.6,80,16,80z"/>\
                </g>\
                <g class="form f57_2 path p57_2 p57_2_09">\
                    <path d="M152,64h-8v16h16V64v-8C160,60.4,156.4,64,152,64z"/>\
                </g>\
                <g class="form f57_2 path p57_2 p57_2_10">\
                    <path d="M176,64L176,64l-16,0v16C168.8,80,176,72.8,176,64z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 58 COLON --------------- */
dana_char['d58'] = $('\
    <div class="vertical_sign c_58">\
        <div class="sign_colon top5">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_58">\
                <g class="form f58 circle c58 c58_01">\
                    <circle cx="8" cy="8" r="8"/>\
                </g>\
                <g class="form f58 circle c58 c58_02">\
                    <circle cx="8" cy="72" r="8"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 59 SEMICOLON --------------- */
dana_char['d59'] = $('\
    <div class="vertical_sign c_59">\
        <div class="sign_semicolon top5path">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_59">\
                <g class="form f59 circle c59 c59_01">\
                    <circle cx="16" cy="8" r="8"/>\
                </g>\
                <g class="form f59 path p59 p59_02">\
                    <path d="M16,64c-4.4,0-8,3.6-8,8v8h16v-8C24,67.6,20.4,64,16,64z"/>\
                </g>\
                <g class="form f59 path p59 p59_03">\
                    <path d="M8,80v8c0,4.4-3.6,8-8,8h8h0c8.8,0,16-7.2,16-16H8z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 60 LESS-THAN SIGN --------------- */
dana_char['d60'] = $('\
    <div class="horizontal_sign c_60">\
        <div class="sign_less-than_sign xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_60">\
                <g class="form f60 square s60 s60_01">\
                    <rect x="32" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_02">\
                    <rect x="48" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_03">\
                    <rect x="64" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_04">\
                    <rect x="80" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_05">\
                    <rect x="96" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_06">\
                    <rect x="112" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_07">\
                    <rect x="128" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_08">\
                    <rect x="144" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_09">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_10">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_11">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_12">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_13">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_14">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_15">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_16">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_17">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_18">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f60 square s60 s60_19">\
                    <rect x="144" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f60 path p60 p60_01">\
                    <path d="M16,0L16,0l0,16H0C0,7.2,7.2,0,16,0z"/>\
                </g>\
                <g class="form f60 path p60 p60_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f60 path p60 p60_03">\
                    <path d="M168,0h-8v16h8c4.4,0,8-3.6,8-8S172.4,0,168,0z"/>\
                </g>\
                <g class="form f60 path p60 p60_04">\
                    <path d="M0,64L0,64l16,0v16C7.2,80,0,72.8,0,64z"/>\
                </g>\
                <g class="form f60 path p60 p60_05">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g class="form f60 path p60 p60_06">\
                    <path d="M168,64h-8v16h8c4.4,0,8-3.6,8-8S172.4,64,168,64z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 61 EQUALS SIGN --------------- */
dana_char['d61'] = $('\
    <div class="horizontal_sign c_61">\
        <div class="sign_equals_sign top6">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_61">\
                <g class="form f61 square s61 s61_01">\
                    <rect x="16" width="16" height="16"/>\
                </g>\
                <g class="form f61 square s61 s61_02">\
                    <rect x="32" width="16" height="16"/>\
                </g>\
                <g class="form f61 square s61 s61_03">\
                    <rect x="48" width="16" height="16"/>\
                </g>\
                <g class="form f61 square s61 s61_04">\
                    <rect x="64" width="16" height="16"/>\
                </g>\
                <g class="form f61 square s61 s61_05">\
                    <rect x="80" width="16" height="16"/>\
                </g>\
                <g class="form f61 square s61 s61_06">\
                    <rect x="96" width="16" height="16"/>\
                </g>\
                <g class="form f61 square s61 s61_07">\
                    <rect x="112" width="16" height="16"/>\
                </g>\
                <g class="form f61 square s61 s61_08">\
                    <rect x="128" width="16" height="16"/>\
                </g>\
                <g class="form f61 square s61 s61_09">\
                    <rect x="144" width="16" height="16"/>\
                </g>\
                <g class="form f61 square s61 s61_10">\
                    <rect x="16" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f61 square s61 s61_11">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f61 square s61 s61_12">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f61 square s61 s61_13">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f61 square s61 s61_14">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f61 square s61 s61_15">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f61 square s61 s61_16">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f61 square s61 s61_17">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f61 square s61 s61_18">\
                    <rect x="144" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f61 path p61 p61_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8h8V0H8z"/>\
                </g>\
                <g class="form f61 path p61 p61_02">\
                    <path d="M168,0h-8v16h8c4.4,0,8-3.6,8-8S172.4,0,168,0z"/>\
                </g>\
                <g class="form f61 path p61 p61_03">\
                    <path d="M8,32c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V32H8z"/>\
                </g>\
                <g class="form f61 path p61 p61_04">\
                    <path d="M168,32h-8v16h8c4.4,0,8-3.6,8-8S172.4,32,168,32z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 62 GREATER-THAN SIGN --------------- */
dana_char['d62'] = $('\
    <div class="horizontal_sign c_62">\
        <div class="sign_greater-than_sign xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_62">\
                <g class="form f62 square s62 s62_01">\
                    <rect x="16" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_02">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_04">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_05">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_06">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_07">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_08">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_10">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_11">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_12">\
                    <rect x="16" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_13">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_14">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_15">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_16">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_17">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_18">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f62 square s62 s62_19">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f62 path p62 p62_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8h8V0H8z"/>\
                </g>\
                <g class="form f62 path p62 p62_02">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f62 path p62 p62_03">\
                    <path d="M176,16L176,16l-16,0V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f62 path p62 p62_04">\
                    <path d="M8,64c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V64H8z"/>\
                </g>\
                <g class="form f62 path p62 p62_05">\
                    <path d="M152,64h-8v16h16V64v-8C160,60.4,156.4,64,152,64z"/>\
                </g>\
                <g class="form f62 path p62 p62_06">\
                    <path d="M160,80L160,80l0-16h16C176,72.8,168.8,80,160,80z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 63 QUESTION MARK --------------- */
dana_char['d63'] = $('\
    <div class="horizontal_sign c_63">\
        <div class="sign_question_mark ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_63">\
                <g class="form f63 square s63 s63_01">\
                    <rect x="16" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f63 square s63 s63_02">\
                    <rect x="32" width="16" height="16"/>\
                </g>\
                <g class="form f63 square s63 s63_03">\
                    <rect x="48" width="16" height="16"/>\
                </g>\
                <g class="form f63 square s63 s63_04">\
                    <rect x="64" width="16" height="16"/>\
                </g>\
                <g class="form f63 square s63 s63_05">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f63 square s63 s63_06">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f63 square s63 s63_07">\
                    <rect x="112" width="16" height="16"/>\
                </g>\
                <g class="form f63 square s63 s63_08">\
                    <rect x="128" width="16" height="16"/>\
                </g>\
                <g class="form f63 square s63 s63_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f63 square s63 s63_10">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f63 square s63 s63_11">\
                    <rect x="48" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f63 square s63 s63_12">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f63 square s63 s63_13">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f63 square s63 s63_14">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f63 square s63 s63_15">\
                    <rect x="112" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f63 square s63 s63_16">\
                    <rect x="128" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f63 path p63 p63_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8h8V0H8z"/>\
                </g>\
                <g class="form f63 path p63 p63_02">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f63 path p63 p63_03">\
                    <path d="M176,16L176,16l-16,0V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f63 path p63 p63_04">\
                    <path d="M48,48L48,48l0,16H32C32,55.2,39.2,48,48,48z"/>\
                </g>\
                <g class="form f63 path p63 p63_05">\
                    <path d="M152,48h-8v16h16V48v-8C160,44.4,156.4,48,152,48z"/>\
                </g>\
                <g class="form f63 path p63 p63_06">\
                    <path d="M160,64L160,64l0-16h16C176,56.8,168.8,64,160,64z"/>\
                </g>\
                <g class="form f63 path p63 p63_07">\
                    <path d="M32,64v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H32z"/>\
                </g>\
                <g class="form f63 circle c63 c63_08">\
                    <circle cx="40" cy="104" r="8"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 64 COMMERCIAL AT --------------- */
dana_char['d64'] = $('\
    <div class="horizontal_sign c_64">\
        <div class="sign_commercial_at ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_64">\
                <g class="form f64 square s64 s64_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_08">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_10">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_11">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_12">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_13">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_14">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_15">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_16">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_17">\
                    <rect x="128" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_18">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_19">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_20">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_21">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_22">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_23">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_24">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_25">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_26">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_27">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_28">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_29">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_30">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_31">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f64 square s64 s64_32">\
                    <rect x="144" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f64 path p64 p64_01">\
                    <path d="M16,0L16,0l0,16H0C0,7.2,7.2,0,16,0z"/>\
                </g>\
                <g class="form f64 path p64 p64_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f64 path p64 p64_03">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f64 path p64 p64_04">\
                    <path d="M176,16L176,16l-16,0V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f64 path p64 p64_05">\
                    <path d="M32,48L32,48l16,0V32C39.2,32,32,39.2,32,48z"/>\
                </g>\
                <g class="form f64 path p64 p64_06">\
                    <path d="M48,32v16v8c0-4.4,3.6-8,8-8h8V32H48z"/>\
                </g>\
                <g class="form f64 path p64 p64_07">\
                    <path d="M112,32v16h8c4.4,0,8,3.6,8,8v-8V32H112z"/>\
                </g>\
                <g class="form f64 path p64 p64_08">\
                    <path d="M144,48L144,48l-16,0V32C136.8,32,144,39.2,144,48z"/>\
                </g>\
                <g class="form f64 path p64 p64_09">\
                    <path d="M48,80L48,80l0-16H32C32,72.8,39.2,80,48,80z"/>\
                </g>\
                <g class="form f64 path p64 p64_10">\
                    <path d="M56,64c-4.4,0-8-3.6-8-8v8v16h16V64H56z"/>\
                </g>\
                <g class="form f64 path p64 p64_11">\
                    <path d="M120,64h-8v16h16V64v-8C128,60.4,124.4,64,120,64z"/>\
                </g>\
                <g class="form f64 path p64 p64_12">\
                    <path d="M152,64h-8v16h16V64v-8C160,60.4,156.4,64,152,64z"/>\
                </g>\
                <g class="form f64 path p64 p64_13">\
                    <path d="M160,80L160,80l0-16h16C176,72.8,168.8,80,160,80z"/>\
                </g>\
                <g class="form f64 path p64 p64_14">\
                    <path d="M0,96L0,96l16,0v16C7.2,112,0,104.8,0,96z"/>\
                </g>\
                <g class="form f64 path p64 p64_15">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f64 path p64 p64_16">\
                    <path d="M168,96h-8v16h8c4.4,0,8-3.6,8-8S172.4,96,168,96z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 91 LEFT SQUARE BRACKET --------------- */
dana_char['d91'] = $('\
    <div class="vertical_sign c_91">\
        <div class="sign_left_square_bracket top">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_91">\
                <g class="form f91 square s91 s91_01">\
                    <rect y="48" width="16" height="16"/>\
                </g>\
                <g class="form f91 square s91 s91_02">\
                    <rect x="16" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f91 square s91 s91_03">\
                    <rect y="64" width="16" height="16"/>\
                </g>\
                <g class="form f91 square s91 s91_04">\
                    <rect y="80" width="16" height="16"/>\
                </g>\
                <g class="form f91 square s91 s91_05">\
                    <rect y="96" width="16" height="16"/>\
                </g>\
                <g class="form f91 square s91 s91_06">\
                    <rect y="112" width="16" height="16"/>\
                </g>\
                <g class="form f91 square s91 s91_07">\
                    <rect y="128" width="16" height="16"/>\
                </g>\
                <g class="form f91 square s91 s91_08">\
                    <rect y="144" width="16" height="16"/>\
                </g>\
                <g class="form f91 square s91 s91_09">\
                    <rect x="16" y="144" width="16" height="16"/>\
                </g>\
                <g class="form f91 square s91 s91_10">\
                    <rect x="16" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f91 square s91 s91_11">\
                    <rect x="32" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f91 square s91 s91_12">\
                    <rect x="48" width="16" height="16"/>\
                </g>\
                <g class="form f91 path p91 p91_01">\
                    <path d="M32,48v16c4.4,0,8-3.6,8-8S36.4,48,32,48z"/>\
                </g>\
                <g class="form f91 path p91 p91_02">\
                    <path d="M32,144v16c4.4,0,8-3.6,8-8S36.4,144,32,144z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 92 REVERSE SOLIDUS --------------- */
dana_char['d92'] = $('\
    <div class="vertical_sign c_92">\
        <div class="sign_reverse_solidus top2">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_92">\
                <g class="form f92 square s92 s92_01">\
                    <rect x="16" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f92 square s92 s92_02">\
                    <rect x="16" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f92 square s92 s92_03">\
                    <rect x="16" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f92 square s92 s92_04">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f92 square s92 s92_05">\
                    <rect x="48" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f92 square s92 s92_06">\
                    <rect x="64" width="16" height="16"/>\
                </g>\
                <g class="form f92 path p92 p92_01">\
                    <path d="M8,16c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V16H8z"/>\
                </g>\
                <g class="form f92 path p92 p92_02">\
                    <path d="M32,32L32,32l-16,0V16C24.8,16,32,23.2,32,32z"/>\
                </g>\
                <g class="form f92 path p92 p92_03">\
                    <path d="M16,40v8h16V32H16v0H8C12.4,32,16,35.6,16,40z"/>\
                </g>\
                <g class="form f92 path p92 p92_04">\
                    <path d="M32,104v-8H16v16h16v0h8C35.6,112,32,108.4,32,104z"/>\
                </g>\
                <g class="form f92 path p92 p92_05">\
                    <path d="M16,112L16,112l16,0v16C23.2,128,16,120.8,16,112z"/>\
                </g>\
                <g class="form f92 path p92 p92_06">\
                    <path d="M40,112h-8v16h8c4.4,0,8-3.6,8-8S44.4,112,40,112z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 93 RIGHT SQUARE BRACKET --------------- */
dana_char['d93'] = $('\
    <div class="vertical_sign c_93">\
        <div class="sign_right_square_bracket toppath">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_93">\
                <g class="form f93 square s93 s93_01">\
                    <rect x="8" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f93 square s93 s93_02">\
                    <rect x="24" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f93 square s93 s93_03">\
                    <rect x="24" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f93 square s93 s93_04">\
                    <rect x="24" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f93 square s93 s93_05">\
                    <rect x="24" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f93 square s93 s93_06">\
                    <rect x="24" y="112" width="16" height="16"/>\
                </g>\
                <g class="form f93 square s93 s93_07">\
                    <rect x="24" y="128" width="16" height="16"/>\
                </g>\
                <g class="form f93 square s93 s93_08">\
                    <rect x="8" y="144" width="16" height="16"/>\
                </g>\
                <g class="form f93 square s93 s93_09">\
                    <rect x="24" y="144" width="16" height="16"/>\
                </g>\
                <g class="form f93 square s93 s93_10">\
                    <rect x="40" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f93 square s93 s93_11">\
                    <rect x="56" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f93 square s93 s93_12">\
                    <rect x="72" width="16" height="16"/>\
                </g>\
                <g class="form f93 path p93 p93_01">\
                    <path d="M8,64V48c-4.4,0-8,3.6-8,8S3.6,64,8,64z"/>\
                </g>\
                <g class="form f93 path p93 p93_02">\
                    <path d="M8,160v-16c-4.4,0-8,3.6-8,8S3.6,160,8,160z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 95 LOW LINE --------------- */
dana_char['d95'] = $('\
    <div class="horizontal_sign c_95">\
        <div class="sign_low_line top9_0">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_95">\
                <g class="form f95 square s95 s95_01">\
                    <rect x="16" width="16" height="16"/>\
                </g>\
                <g class="form f95 square s95 s95_02">\
                    <rect x="32" width="16" height="16"/>\
                </g>\
                <g class="form f95 square s95 s95_03">\
                    <rect x="48" width="16" height="16"/>\
                </g>\
                <g class="form f95 square s95 s95_04">\
                    <rect x="64" width="16" height="16"/>\
                </g>\
                <g class="form f95 square s95 s95_05">\
                    <rect x="80" width="16" height="16"/>\
                </g>\
                <g class="form f95 square s95 s95_06">\
                    <rect x="96" width="16" height="16"/>\
                </g>\
                <g class="form f95 square s95 s95_07">\
                    <rect x="112" width="16" height="16"/>\
                </g>\
                <g class="form f95 square s95 s95_08">\
                    <rect x="128" width="16" height="16"/>\
                </g>\
                <g class="form f95 square s95 s95_09">\
                    <rect x="144" width="16" height="16"/>\
                </g>\
                <g class="form f95 path p95 p95_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8h8V0H8z"/>\
                </g>\
                <g class="form f95 path p95 p95_02">\
                    <path d="M168,0h-8v16h8c4.4,0,8-3.6,8-8S172.4,0,168,0z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 97 LETTER A --------------- */
dana_char['d97'] = $('\
    <div class="letter c_97">\
        <div class="letter_A xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_97">\
                <g class="form f97 square s97 s97_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_08">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                 <g class="form f97 square s97 s97_09">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                 <g class="form f97 square s97 s97_10">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_11">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_12">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_13">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                 <g class="form f97 square s97 s97_14">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_15">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_16">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_17">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_18">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_19">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_20">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_21">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_22">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_23">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_24">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f97 square s97 s97_25">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f97 path p97 p97_01">\
                    <path d="M32,16V0c-4.4,0-8,3.6-8,8S27.6,16,32,16z"/>\
                </g>\
                <g class="form f97 path p97 p97_02">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f97 path p97 p97_03">\
                    <path d="M176,16L176,16l-16,0V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f97 path p97 p97_04">\
                    <path d="M0,48L0,48l16,0V32C7.2,32,0,39.2,0,48z"/>\
                </g>\
                <g class="form f97 path p97 p97_05">\
                    <path d="M16,32v16v8c0-4.4,3.6-8,8-8h8V32H16z"/>\
                </g>\
                <g class="form f97 path p97 p97_06">\
                    <path d="M144,32v16h8c4.4,0,8,3.6,8,8v-8V32H144z"/>\
                </g>\
                <g class="form f97 path p97 p97_07">\
                    <path d="M16,80L16,80l0-16H0C0,72.8,7.2,80,16,80z"/>\
                </g>\
                <g class="form f97 path p97 p97_08">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g class="form f97 path p97 p97_09">\
                    <path d="M152,64h-8v16h16V64v-8C160,60.4,156.4,64,152,64z"/>\
                </g>\
                <g class="form f97 path p97 p97_10">\
                    <path d="M160,80L160,80l0-16h16C176,72.8,168.8,80,160,80z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 98 LETTER B --------------- */
dana_char['d98'] = $('\
    <div class="letter c_98">\
        <div class="letter_B ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_98">\
                <g class="form f98 square s98 s98_01">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_02">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_03">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_04">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_05">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_06">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_07">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_08">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_09">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_10">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                 <g class="form f98 square s98 s98_11">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_12">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_13">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_14">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_15">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_16">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_17">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                 <g class="form f98 square s98 s98_18">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_19">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_20">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_21">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f98 square s98 s98_22">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f98 path p98 p98_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8v8h16V8C16,3.6,12.4,0,8,0z"/>\
                </g>\
                <g class="form f98 path p98 p98_02">\
                    <path d="M16,32v16v8c0-4.4,3.6-8,8-8h8V32H16z"/>\
                </g>\
                <g class="form f98 path p98 p98_03">\
                    <path d="M144,32v16h8c4.4,0,8,3.6,8,8v-8V32H144z"/>\
                </g>\
                <g class="form f98 path p98 p98_04">\
                    <path d="M176,48L176,48l-16,0V32C168.8,32,176,39.2,176,48z"/>\
                </g>\
                <g class="form f98 path p98 p98_05">\
                    <path d="M16,112L16,112l0-16H0C0,104.8,7.2,112,16,112z"/>\
                </g>\
                <g class="form f98 path p98 p98_06">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f98 path p98 p98_07">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f98 path p98 p98_08">\
                    <path d="M160,112L160,112l0-16h16C176,104.8,168.8,112,160,112z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 99 LETTER C --------------- */
dana_char['d99'] = $('\
    <div class="letter c_99">\
        <div class="letter_C xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_99">\
                <g class="form f99 square s99 s99_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f99 square s99 s99_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f99 square s99 s99_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f99 square s99 s99_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f99 square s99 s99_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f99 square s99 s99_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f99 square s99 s99_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f99 square s99 s99_08">\
                    <rect x="144" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f99 square s99 s99_09">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                 <g class="form f99 square s99 s99_10">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f99 square s99 s99_11">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f99 square s99 s99_12">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f99 square s99 s99_13">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f99 square s99 s99_14">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f99 square s99 s99_15">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f99 square s99 s99_16">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f99 square s99 s99_17">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f99 square s99 s99_18">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f99 square s99 s99_19">\
                    <rect x="144" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f99 path p99 p99_01">\
                    <path d="M0,16L0,16l16,0V0C7.2,0,0,7.2,0,16z"/>\
                </g>\
                <g class="form f99 path p99 p99_01">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f99 path p99 p99_03">\
                    <path d="M168,0h-8v16h8c4.4,0,8-3.6,8-8S172.4,0,168,0z"/>\
                </g>\
                <g class="form f99 path p99 p99_04">\
                    <path d="M16,80L16,80l0-16H0C0,72.8,7.2,80,16,80z"/>\
                </g>\
                <g class="form f99 path p99 p99_05">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g class="form f99 path p99 p99_06">\
                    <path d="M168,64h-8v16h8c4.4,0,8-3.6,8-8S172.4,64,168,64z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 100 LETTER D --------------- */
dana_char['d100'] = $('\
    <div class="letter c_100">\
        <div class="letter_D ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_100">\
                <g class="form f100 square s100 s100_01">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_02">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_03">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_04">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_05">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_06">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_07">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_08">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_09">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_10">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_11">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_12">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_13">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_14">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_15">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_16">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_17">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_18">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_19">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_20">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_21">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f100 square s100 s100_22">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f100 path p100 p100_01">\
                    <path d="M168,0c-4.4,0-8,3.6-8,8v8h16V8C176,3.6,172.4,0,168,0z"/>\
                </g>\
                <g class="form f100 path p100 p100_02">\
                    <path d="M0,48L0,48l16,0V32C7.2,32,0,39.2,0,48z"/>\
                </g>\
                <g class="form f100 path p100 p100_03">\
                    <path d="M16,32v16v8c0-4.4,3.6-8,8-8h8V32H16z"/>\
                </g>\
                <g class="form f100 path p100 p100_04">\
                    <path d="M144,32v16h8c4.4,0,8,3.6,8,8v-8V32H144z"/>\
                </g>\
                <g class="form f100 path p100 p100_05">\
                    <path d="M16,112L16,112l0-16H0C0,104.8,7.2,112,16,112z"/>\
                </g>\
                <g class="form f100 path p100 p100_06">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f100 path p100 p100_07">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f100 path p100 p100_08">\
                    <path d="M160,112L160,112l0-16h16C176,104.8,168.8,112,160,112z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 101 LETTER E --------------- */
dana_char['d101'] = $('\
    <div class="letter c_101">\
        <div class="letter_E xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_101">\
                <g class="form f101 square s101 s101_01">\
                    <rect x="32" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_02">\
                    <rect x="48" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_03">\
                    <rect x="64" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_04">\
                    <rect x="80" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_05">\
                    <rect x="96" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_06">\
                    <rect x="112" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_07">\
                    <rect x="128" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_08">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_10">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_11">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_12">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_13">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_14">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_15">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_16">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_17">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_18">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_19">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_20">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_21">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_22">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_23">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_24">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_25">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f101 square s101 s101_26">\
                    <rect x="144" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f101 path p101 p101_01">\
                    <path d="M16,0L16,0l0,16H0C0,7.2,7.2,0,16,0z"/>\
                </g>\
                <g class="form f101 path p101 p101_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f101 path p101 p101_03">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f101 path p101 p101_04">\
                    <path d="M160,0L160,0l0,16h16C176,7.2,168.8,0,160,0z"/>\
                </g>\
                <g class="form f101 path p101 p101_05">\
                    <path d="M24,32c-4.4,0-8-3.6-8-8v8v16h16V32H24z"/>\
                </g>\
                <g class="form f101 path p101 p101_06">\
                    <path d="M152,32h-8v16h16V32v-8C160,28.4,156.4,32,152,32z"/>\
                </g>\
                <g class="form f101 path p101 p101_07">\
                    <path d="M176,32L176,32l-16,0v16C168.8,48,176,40.8,176,32z"/>\
                </g>\
                <g class="form f101 path p101 p101_08">\
                    <path d="M0,64L0,64l16,0v16C7.2,80,0,72.8,0,64z"/>\
                </g>\
                <g class="form f101 path p101 p101_09">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g class="form f101 path p101 p101_10">\
                    <path d="M160,64v16c4.4,0,8-3.6,8-8S164.4,64,160,64z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 102 LETTER F --------------- */
dana_char['d102'] = $('\
    <div class="letter c_102">\
        <div class="letter_F ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_102">\
                <g class="form f102 square s102 s102_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_08">\
                    <rect x="144" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_09">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_10">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_11">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_12">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_13">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_14">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_15">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_16">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_17">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_18">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_19">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f102 square s102 s102_20">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f102 path p102 p102_01">\
                    <path d="M16,0L16,0l0,16H0C0,7.2,7.2,0,16,0z"/>\
                </g>\
                <g class="form f102 path p102 p102_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f102 path p102 p102_03">\
                    <path d="M168,0h-8v16h8c4.4,0,8-3.6,8-8S172.4,0,168,0z"/>\
                </g>\
                <g class="form f102 path p102 p102_04">\
                    <path d="M24,32c-4.4,0-8-3.6-8-8v8v16h16V32H24z"/>\
                </g>\
                <g class="form f102 path p102 p102_05">\
                    <path d="M152,32h-8v16h8c4.4,0,8-3.6,8-8S156.4,32,152,32z"/>\
                </g>\
                 <g class="form f102 path p102 p102_06">\
                    <path d="M0,96v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H0z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 103 LETTER G --------------- */
dana_char['d103'] = $('\
    <div class="letter c_103">\
        <div class="letter_G descender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_103">\
                <g class="form f103 square s103 s103_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g> \
                <g class="form f103 square s103 s103_08">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>                           \
                <g class="form f103 square s103 s103_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_10">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_11">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_12">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_13">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_14">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_15">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_16">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_17">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_18">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_19">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_20">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_21">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_22">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_23">\
                    <rect x="16" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_24">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_25">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_26">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_27">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_28">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_29">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f103 square s103 s103_30">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f103 path p103 p103_01">\
                    <path d="M16,0L16,0l0,16H0C0,7.2,7.2,0,16,0z"/>\
                </g>\
                <g class="form f103 path p103 p103_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f103 path p103 p103_03">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f103 path p103 p103_04">\
                    <path d="M160,0L160,0l0,16h16C176,7.2,168.8,0,160,0z"/>\
                </g>\
                <g class="form f103 path p103 p103_05">\
                    <path d="M0,64L0,64l16,0v16C7.2,80,0,72.8,0,64z"/>\
                </g>\
                <g class="form f103 path p103 p103_06">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g class="form f103 path p103 p103_07">\
                    <path d="M152,64h-8v16h16V64v-8C160,60.4,156.4,64,152,64z"/>\
                </g>\
                <g class="form f103 path p103 p103_08">\
                    <path d="M16,112V96c-4.4,0-8,3.6-8,8S11.6,112,16,112z"/>\
                </g>\
                <g class="form f103 path p103 p103_09">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f103 path p103 p103_10">\
                    <path d="M176,96L176,96l-16,0v16C168.8,112,176,104.8,176,96z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 104 LETTER H --------------- */
dana_char['d104'] = $('\
    <div class="letter c_104">\
        <div class="letter_H ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_104">\
                <g class="form f104 square s104 s104_01">\
                    <rect y="16" width="16" height="16"/>\
                </g>\
                <g class="form f104 square s104 s104_02">\
                    <rect y="32" width="16" height="16"/>\
                </g>\
                <g class="form f104 square s104 s104_03">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f104 square s104 s104_04">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f104 square s104 s104_05">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f104 square s104 s104_06">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f104 square s104 s104_07">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f104 square s104 s104_08">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f104 square s104 s104_09">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f104 square s104 s104_10">\
                    <rect y="48" width="16" height="16"/>\
                </g>\
                <g class="form f104 square s104 s104_11">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f104 square s104 s104_12">\
                    <rect y="64" width="16" height="16"/>\
                </g>\
                <g class="form f104 square s104 s104_13">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f104 square s104 s104_14">\
                    <rect y="80" width="16" height="16"/>\
                </g>\
                <g class="form f104 square s104 s104_15">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f104 path p104 p104_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8v8h16V8C16,3.6,12.4,0,8,0z"/>\
                </g>\
                <g class="form f104 path p104 p104_02">\
                    <path d="M16,32v16v8c0-4.4,3.6-8,8-8h8V32H16z"/>\
                </g>\
                <g class="form f104 path p104 p104_03">\
                    <path d="M144,32v16h8c4.4,0,8,3.6,8,8v-8V32H144z"/>\
                </g>\
                <g class="form f104 path p104 p104_04">\
                    <path d="M176,48L176,48l-16,0V32C168.8,32,176,39.2,176,48z"/>\
                </g>\
                 <g class="form f104 path p104 p104_05">\
                    <path d="M0,96v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H0z"/>\
                </g>\
                <g class="form f104 path p104 p104_06">\
                    <path d="M160,96v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H160z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 105 LETTER I --------------- */
dana_char['d105'] = $('\
    <div class="letter c_105">\
        <div class="letter_I ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_105">\
                <g class="form f105 square s105 s105_01">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f105 square s105 s105_02">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f105 square s105 s105_03">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f105 square s105 s105_04">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f105 square s105 s105_05">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f105 square s105 s105_06">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f105 square s105 s105_07">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f105 square s105 s105_08">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f105 square s105 s105_09">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f105 square s105 s105_10">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f105 square s105 s105_11">\
                    <rect x="144" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f105 circle c105 c105_01">\
                    <circle cx="8" cy="8" r="8"/>\
                </g>\
                <g class="form f105 path p105 p105_02">\
                    <path d="M8,32c-4.4,0-8,3.6-8,8v8h16v-8C16,35.6,12.4,32,8,32z"/>\
                </g>\
                <g class="form f105 path p105 p105_03">\
                    <path d="M0,96L0,96l16,0v16C7.2,112,0,104.8,0,96z"/>\
                </g>\
                <g class="form f105 path p105 p105_04">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f105 path p105 p105_05">\
                    <path d="M168,96h-8v16h8c4.4,0,8-3.6,8-8S172.4,96,168,96z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 106 LETTER J --------------- */
dana_char['d106'] = $('\
    <div class="letter c_106">\
        <div class="letter_J ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_106">\
                <g class="form f106 square s106 s106_01">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f106 square s106 s106_02">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f106 square s106 s106_03">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f106 square s106 s106_04">\
                    <rect x="160" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f106 square s106 s106_05">\
                    <rect x="160" y="112" width="16" height="16"/>\
                </g>\
                <g class="form f106 square s106 s106_06">\
                    <rect x="16" y="128" width="16" height="16"/>\
                </g>\
                <g class="form f106 square s106 s106_07">\
                    <rect x="32" y="128" width="16" height="16"/>\
                </g>\
                <g class="form f106 square s106 s106_08">\
                    <rect x="48" y="128" width="16" height="16"/>\
                </g>\
                <g class="form f106 square s106 s106_09">\
                    <rect x="64" y="128" width="16" height="16"/>\
                </g>\
                <g class="form f106 square s106 s106_10">\
                    <rect x="80" y="128" width="16" height="16"/>\
                </g>\
                <g class="form f106 square s106 s106_11">\
                    <rect x="96" y="128" width="16" height="16"/>\
                </g>\
                <g class="form f106 square s106 s106_12">\
                    <rect x="112" y="128" width="16" height="16"/>\
                </g>\
                <g class="form f106 square s106 s106_13">\
                    <rect x="128" y="128" width="16" height="16"/>\
                </g>\
                <g class="form f106 circle c106 c106_01">\
                    <circle cx="168" cy="8" r="8"/>\
                </g>\
                <g class="form f106 path p106 p106_02">\
                    <path d="M168,32c-4.4,0-8,3.6-8,8v8h16v-8C176,35.6,172.4,32,168,32z"/>\
                </g>\
                <g class="form f106 path p106 p106_03">\
                    <path d="M8,128c-4.4,0-8,3.6-8,8s3.6,8,8,8h8v-16H8z"/>\
                </g>\
                <g class="form f106 path p106 p106_04">\
                    <path d="M152,128h-8v16h16v-16v-8C160,124.4,156.4,128,152,128z"/>\
                </g>\
                <g class="form f106 path p106 p106_05">\
                    <path d="M176,128L176,128l-16,0v16C168.8,144,176,136.8,176,128z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 107 LETTER K --------------- */
dana_char['d107'] = $('\
    <div class="letter c_107">\
        <div class="letter_K ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_107">\
                <g class="form f107 square s107 s107_01">\
                    <rect y="16" width="16" height="16"/>\
                </g>\
                <g class="form f107 square s107 s107_02">\
                    <rect y="32" width="16" height="16"/>\
                </g>\
                <g class="form f107 square s107 s107_03">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f107 square s107 s107_04">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f107 square s107 s107_05">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f107 square s107 s107_06">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f107 square s107 s107_07">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f107 square s107 s107_08">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f107 square s107 s107_09">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f107 square s107 s107_10">\
                    <rect y="48" width="16" height="16"/>\
                </g>\
                <g class="form f107 square s107 s107_11">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f107 square s107 s107_12">\
                    <rect y="64" width="16" height="16"/>\
                </g>\
                <g class="form f107 square s107 s107_13">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f107 square s107 s107_14">\
                    <rect y="80" width="16" height="16"/>\
                </g>\
                <g class="form f107 square s107 s107_15">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f107 path p107 p107_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8v8h16V8C16,3.6,12.4,0,8,0z"/>\
                </g>\
                <g class="form f107 path p107 p107_02">\
                    <path d="M136,0c-4.4,0-8,3.6-8,8v8h16V8C144,3.6,140.4,0,136,0z"/>\
                </g>\
                <g class="form f107 path p107 p107_03">\
                    <path d="M128,16v8c0,4.4-3.6,8-8,8h8h0c8.8,0,16-7.2,16-16H128z"/>\
                </g>\
                <g class="form f107 path p107 p107_04">\
                    <path d="M16,32v16v8c0-4.4,3.6-8,8-8h8V32H16z"/>\
                </g>\
                <g class="form f107 path p107 p107_05">\
                    <path d="M144,32v16h8c4.4,0,8,3.6,8,8v-8V32H144z"/>\
                </g>\
                <g class="form f107 path p107 p107_06">\
                    <path d="M176,48L176,48l-16,0V32C168.8,32,176,39.2,176,48z"/>\
                </g>\
                 <g class="form f107 path p107 p107_07">\
                    <path d="M0,96v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H0z"/>\
                </g>                            \
                <g class="form f107 path p107 p107_08">\
                    <path d="M160,96v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H160z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 108 LETTER L --------------- */
dana_char['d108'] = $('\
    <div class="letter c_108">\
        <div class="letter_L ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_108">\
                <g class="form f108 square s108 s108_01">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f108 square s108 s108_02">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f108 square s108 s108_03">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f108 square s108 s108_04">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f108 square s108 s108_05">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f108 square s108 s108_06">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f108 square s108 s108_07">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f108 square s108 s108_08">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f108 square s108 s108_09">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f108 square s108 s108_10">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f108 square s108 s108_11">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f108 square s108 s108_12">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f108 square s108 s108_13">\
                    <rect x="144" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f108 path p108 p108_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8v8h16V8C16,3.6,12.4,0,8,0z"/>\
                </g>\
                <g class="form f108 path p108 p108_02">\
                    <path d="M0,96L0,96l16,0v16C7.2,112,0,104.8,0,96z"/>\
                </g>\
                <g class="form f108 path p108 p108_03">\
                    <path d="M16,112V96v-8c0,4.4,3.6,8,8,8h8v16H16z"/>\
                </g>\
                <g class="form f108 path p108 p108_04">\
                    <path d="M168,96h-8v16h8c4.4,0,8-3.6,8-8S172.4,96,168,96z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 109 LETTER M --------------- */
dana_char['d109'] = $('\
    <div class="letter c_109">\
        <div class="letter_M xheight m_xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_109">\
                <g class="form f109 square s109 s109_01">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_02">\
                    <rect x="48" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_03">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_04">\
                    <rect x="112" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_05">\
                    <rect x="128" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_06">\
                    <rect y="64" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_07">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_08">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_09">\
                    <rect y="80" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_10">\
                    <rect x="80" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_11">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_12">\
                    <rect y="96" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_13">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_14">\
                    <rect x="160" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_15">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_16">\
                    <rect x="80" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_17">\
                    <rect x="80" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_18">\
                    <rect x="48" width="16" height="16"/>\
                </g>\
                <g class="form f109 square s109 s109_19">\
                    <rect x="112" width="16" height="16"/>\
                </g>\
                <g class="form f109 path p109 p109_01">\
                    <path d="M0,64L0,64l16,0V48C7.2,48,0,55.2,0,64z"/>\
                </g>\
                <g class="form f109 path p109 p109_02">\
                    <path d="M16,48v16v8c0-4.4,3.6-8,8-8h8V48H16z"/>\
                </g>\
                <g class="form f109 path p109 p109_03">\
                    <path d="M80,48v16v8c0-4.4-3.6-8-8-8h-8V48H80z"/>\
                </g>\
                <g class="form f109 path p109 p109_04">\
                    <path d="M96,48v16v8c0-4.4,3.6-8,8-8h8V48H96z"/>\
                </g>\
                <g class="form f109 path p109 p109_05">\
                    <path d="M144,48v16h8c4.4,0,8,3.6,8,8v-8V48H144z"/>\
                </g>\
                <g class="form f109 path p109 p109_06">\
                    <path d="M176,64L176,64l-16,0V48C168.8,48,176,55.2,176,64z"/>\
                </g>\
                <g class="form f109 path p109 p109_07">\
                    <path d="M0,112v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H0z"/>\
                </g>\
                <g class="form f109 path p109 p109_08">\
                    <path d="M80,112v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H80z"/>\
                </g>\
                <g class="form f109 path p109 p109_09">\
                    <path d="M160,112v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H160z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 110 LETTER N --------------- */
dana_char['d110'] = $('\
    <div class="letter c_110">\
        <div class="letter_N xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_110">\
                <g class="form f110 square s110 s110_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f110 square s110 s110_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f110 square s110 s110_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f110 square s110 s110_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f110 square s110 s110_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f110 square s110 s110_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f110 square s110 s110_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f110 square s110 s110_08">\
                    <rect y="16" width="16" height="16"/>\
                </g>\
                <g class="form f110 square s110 s110_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f110 square s110 s110_10">\
                    <rect y="32" width="16" height="16"/>\
                </g>\
                <g class="form f110 square s110 s110_11">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f110 square s110 s110_12">\
                    <rect y="48" width="16" height="16"/>\
                </g>\
                <g class="form f110 square s110 s110_13">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f110 path p110 p110_01">\
                    <path d="M0,16L0,16l16,0V0C7.2,0,0,7.2,0,16z"/>\
                </g>\
                <g class="form f110 path p110 p110_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f110 path p110 p110_03">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f110 path p110 p110_04">\
                    <path d="M176,16L176,16l-16,0V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f110 path p110 p110_05">\
                    <path d="M0,64v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H0z"/>\
                </g>\
                <g class="form f110 path p110 p110_06">\
                    <path d="M160,64v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H160z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 111 LETTER O --------------- */
dana_char['d111'] = $('\
    <div class="letter c_111">\
        <div class="letter_O xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_111">\
                <g class="form f111 square s111 s111_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_08">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_10">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_11">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_12">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_13">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_14">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_15">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_16">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_17">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_18">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_19">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f111 square s111 s111_20">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f111 path p111 p111_01">\
                    <path d="M0,16L0,16l16,0V0C7.2,0,0,7.2,0,16z"/>\
                </g>\
                <g class="form f111 path p111 p111_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f111 path p111 p111_03">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f111 path p111 p111_04">\
                    <path d="M176,16L176,16l-16,0V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f111 path p111 p111_05">\
                    <path d="M16,80L16,80l0-16H0C0,72.8,7.2,80,16,80z"/>\
                </g>\
                <g class="form f111 path p111 p111_06">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g class="form f111 path p111 p111_07">\
                    <path d="M152,64h-8v16h16V64v-8C160,60.4,156.4,64,152,64z"/>\
                </g>\
                <g class="form f111 path p111 p111_08">\
                    <path d="M160,80L160,80l0-16h16C176,72.8,168.8,80,160,80z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 112 LETTER P --------------- */
dana_char['d112'] = $('\
    <div class="letter c_112">\
        <div class="letter_P descender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_112">\
                <g class="form f112 square s112 s112_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_08">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_10">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_11">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_12">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_13">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_14">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_15">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_16">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_17">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_18">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_19">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_20">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_21">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f112 square s112 s112_22">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f112 path p112 p112_01">\
                    <path d="M16,0L16,0l0,16H0C0,7.2,7.2,0,16,0z"/>\
                </g>\
                <g class="form f112 path p112 p112_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f112 path p112 p112_03">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f112 path p112 p112_04">\
                    <path d="M160,0L160,0l0,16h16C176,7.2,168.8,0,160,0z"/>\
                </g>\
                <g class="form f112 path p112 p112_05">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g class="form f112 path p112 p112_06">\
                    <path d="M152,64h-8v16h16V64v-8C160,60.4,156.4,64,152,64z"/>\
                </g>\
                <g class="form f112 path p112 p112_07">\
                    <path d="M176,64L176,64l-16,0v16C168.8,80,176,72.8,176,64z"/>\
                </g>\
                <g class="form f112 path p112 p112_08">\
                    <path d="M0,96v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H0z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 113 LETTER Q --------------- */
dana_char['d113'] = $('\
    <div class="letter c_113">\
        <div class="letter_Q descender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_113">\
                <g class="form f113 square s113 s113_01">\
                    <rect x="31.5" y="-0.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_02">\
                    <rect x="47.5" y="-0.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_03">\
                    <rect x="63.5" y="-0.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_04">\
                    <rect x="79.5" y="-0.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_05">\
                    <rect x="95.5" y="-0.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_06">\
                    <rect x="111.5" y="-0.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_07">\
                    <rect x="127.5" y="-0.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_08">\
                    <rect x="-0.5" y="15.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_09">\
                    <rect x="159.5" y="15.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_10">\
                    <rect x="-0.5" y="31.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_11">\
                    <rect x="159.5" y="31.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_12">\
                    <rect x="-0.5" y="47.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_13">\
                    <rect x="159.5" y="47.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_14">\
                    <rect x="31.5" y="63.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_15">\
                    <rect x="47.5" y="63.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_16">\
                    <rect x="63.5" y="63.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_17">\
                    <rect x="79.5" y="63.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_18">\
                    <rect x="95.5" y="63.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_19">\
                    <rect x="111.5" y="63.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_20">\
                    <rect x="127.5" y="63.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_21">\
                    <rect x="159.5" y="63.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 square s113 s113_22">\
                    <rect x="159.5" y="79.5" width="16" height="16"/>\
                </g>\
                <g class="form f113 path p113 p113_01">\
                    <path d="M15.5-0.5L15.5-0.5l0,16h-16C-0.5,6.7,6.7-0.5,15.5-0.5z"/>\
                </g>\
                <g class="form f113 path p113 p113_02">\
                    <path d="M15.5-0.5v16v8c0-4.4,3.6-8,8-8h8v-16H15.5z"/>\
                </g>\
                <g class="form f113 path p113 p113_03">\
                    <path d="M143.5-0.5v16h8c4.4,0,8,3.6,8,8v-8v-16H143.5z"/>\
                </g>\
                <g class="form f113 path p113 p113_04">\
                    <path d="M159.5-0.5L159.5-0.5l0,16h16C175.5,6.7,168.3-0.5,159.5-0.5z"/>\
                </g>\
                <g class="form f113 path p113 p113_05">\
                    <path d="M-0.5,63.5L-0.5,63.5l16,0v16C6.7,79.5-0.5,72.3-0.5,63.5z"/>\
                </g>\
                <g class="form f113 path p113 p113_06">\
                    <path d="M23.5,63.5c-4.4,0-8-3.6-8-8v8v16h16v-16H23.5z"/>\
                </g>\
                <g class="form f113 path p113 p113_07">\
                    <path d="M151.5,63.5h-8v16h16v-16v-8C159.5,59.9,155.9,63.5,151.5,63.5z"/>\
                </g>\
                <g class="form f113 path p113 p113_08">\
                    <path d="M159.5,95.5v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H159.5z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 114 LETTER R --------------- */
dana_char['d114'] = $('\
    <div class="letter c_114">\
        <div class="letter_R xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_114">\
                <g class="form f114 square s114 s114_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f114 square s114 s114_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f114 square s114 s114_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f114 square s114 s114_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f114 square s114 s114_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f114 square s114 s114_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f114 square s114 s114_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f114 square s114 s114_08">\
                    <rect x="144" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f114 square s114 s114_09">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f114 square s114 s114_10">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f114 square s114 s114_11">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f114 path p114 p114_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8v8h16V8C16,3.6,12.4,0,8,0z"/>\
                </g>\
                <g class="form f114 path p114 p114_02">\
                    <path d="M16,16L16,16L16,16v8c0-4.4,3.6-8,8-8h8V0C23.2,0,16,7.2,16,16z"/>\
                </g>\
                <g class="form f114 path p114 p114_03">\
                    <path d="M168,0h-8v16h8c4.4,0,8-3.6,8-8S172.4,0,168,0z"/>\
                </g>\
                <g class="form f114 path p114 p114_04">\
                    <path d="M0,64v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H0z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 115 LETTER S --------------- */
dana_char['d115'] = $('\
    <div class="letter c_115">\
        <div class="letter_S xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_115">\
                <g class="form f115 square s115 s115_01">\
                    <rect x="32.5" y="0.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_02">\
                    <rect x="48.5" y="0.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_03">\
                    <rect x="64.5" y="0.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_04">\
                    <rect x="80.5" y="0.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_05">\
                    <rect x="96.5" y="0.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_06">\
                    <rect x="112.5" y="0.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_07">\
                    <rect x="128.5" y="0.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_08">\
                    <rect x="144.5" y="0.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_09">\
                    <rect x="0.5" y="16.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_10">\
                    <rect x="32.5" y="32.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_11">\
                    <rect x="48.5" y="32.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_12">\
                    <rect x="64.5" y="32.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_13">\
                    <rect x="80.5" y="32.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_14">\
                    <rect x="96.5" y="32.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_15">\
                    <rect x="112.5" y="32.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_16">\
                    <rect x="128.5" y="32.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_17">\
                    <rect x="160.5" y="48.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_18">\
                    <rect x="16.5" y="64.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_19">\
                    <rect x="32.5" y="64.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_20">\
                    <rect x="48.5" y="64.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_21">\
                    <rect x="64.5" y="64.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_22">\
                    <rect x="80.5" y="64.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_23">\
                    <rect x="96.5" y="64.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_24">\
                    <rect x="112.5" y="64.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 square s115 s115_25">\
                    <rect x="128.5" y="64.5" width="16" height="16"/>\
                </g>\
                <g class="form f115 path p115 p115_01">\
                    <path d="M16.5,0.5L16.5,0.5l0,16h-16C0.5,7.7,7.7,0.5,16.5,0.5z"/>\
                </g>\
                <g class="form f115 path p115 p115_02">\
                    <path d="M16.5,0.5v16v8c0-4.4,3.6-8,8-8h8v-16H16.5z"/>\
                </g>\
                <g class="form f115 path p115 p115_03">\
                    <path d="M168.5,0.5h-8v16h8c4.4,0,8-3.6,8-8S172.9,0.5,168.5,0.5z"/>\
                </g>\
                <g class="form f115 path p115 p115_04">\
                    <path d="M0.5,32.5L0.5,32.5l16,0v16C7.7,48.5,0.5,41.3,0.5,32.5z"/>\
                </g>\
                <g class="form f115 path p115 p115_05">\
                    <path d="M24.5,32.5c-4.4,0-8-3.6-8-8v8v16h16v-16H24.5z"/>\
                </g>\
                <g class="form f115 path p115 p115_06">\
                    <path d="M144.5,32.5v16h8c4.4,0,8,3.6,8,8v-8v-16H144.5z"/>\
                </g>\
                <g class="form f115 path p115 p115_07">\
                    <path d="M176.5,48.5L176.5,48.5l-16,0v-16C169.3,32.5,176.5,39.7,176.5,48.5z"/>\
                </g>\
                <g class="form f115 path p115 p115_08">\
                    <path d="M8.5,64.5c-4.4,0-8,3.6-8,8s3.6,8,8,8h8v-16H8.5z"/>\
                </g>\
                <g class="form f115 path p115 p115_09">\
                    <path d="M152.5,64.5h-8v16h16v-16v-8C160.5,60.9,156.9,64.5,152.5,64.5z"/>\
                </g>\
                <g class="form f115 path p115 p115_10">\
                    <path d="M160.5,80.5L160.5,80.5l0-16h16C176.5,73.3,169.3,80.5,160.5,80.5z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 116 LETTER T --------------- */
dana_char['d116'] = $('\
    <div class="letter c_116">\
        <div class="letter_T ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_116">\
                <g class="form f116 square s116 s116_01">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_02">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_03">\
                    <rect x="16" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_04">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_05">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_06">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_07">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_08">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_09">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_10">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_11">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_12">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_13">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_14">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_15">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_16">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_17">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_18">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_19">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f116 square s116 s116_20">\
                    <rect x="144" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f116 path p116 p116_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8v8h16V8C16,3.6,12.4,0,8,0z"/>\
                </g>\
                <g class="form f116 path p116 p116_02">\
                    <path d="M128,32v16c4.4,0,8-3.6,8-8S132.4,32,128,32z"/>\
                </g>\
                <g class="form f116 path p116 p116_03">\
                    <path d="M0,96L0,96l16,0v16C7.2,112,0,104.8,0,96z"/>\
                </g>\
                <g class="form f116 path p116 p116_04">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f116 path p116 p116_05">\
                    <path d="M168,96h-8v16h8c4.4,0,8-3.6,8-8S172.4,96,168,96z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 117 LETTER U --------------- */
dana_char['d117'] = $('\
    <div class="letter c_117">\
        <div class="letter_U xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_117">\
                <g class="form f117 square s117 s117_01">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f117 square s117 s117_02">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f117 square s117 s117_03">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f117 square s117 s117_04">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f117 square s117 s117_05">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f117 square s117 s117_06">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f117 square s117 s117_07">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f117 square s117 s117_08">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f117 square s117 s117_09">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f117 square s117 s117_10">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f117 square s117 s117_11">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f117 square s117 s117_12">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f117 square s117 s117_13">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f117 path p117 p117_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8v8h16V8C16,3.6,12.4,0,8,0z"/>\
                </g>\
                <g class="form f117 path p117 p117_02">\
                    <path d="M168,0c-4.4,0-8,3.6-8,8v8h16V8C176,3.6,172.4,0,168,0z"/>\
                </g>\
                <g class="form f117 path p117 p117_03">\
                    <path d="M0,64L0,64l16,0v16C7.2,80,0,72.8,0,64z"/>\
                </g>\
                <g class="form f117 path p117 p117_04">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g class="form f117 path p117 p117_05">\
                    <path d="M152,64h-8v16h16V64v-8C160,60.4,156.4,64,152,64z"/>\
                </g>\
                <g class="form f117 path p117 p117_06">\
                    <path d="M176,64L176,64l-16,0v16C168.8,80,176,72.8,176,64z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 118 LETTER V --------------- */
dana_char['d118'] = $('\
    <div class="letter c_118">\
        <div class="letter_V xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_118">\
                <g class="form f118 square s118 s118_01">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f118 square s118 s118_02">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f118 square s118 s118_03">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f118 square s118 s118_04">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f118 square s118 s118_05">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f118 square s118 s118_06">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f118 square s118 s118_07">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f118 square s118 s118_08">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f118 square s118 s118_09">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f118 square s118 s118_10">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f118 square s118 s118_11">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f118 square s118 s118_12">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f118 path p118 p118_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8v8h16V8C16,3.6,12.4,0,8,0z"/>\
                </g>\
                <g class="form f118 path p118 p118_02">\
                    <path d="M168,0c-4.4,0-8,3.6-8,8v8h16V8C176,3.6,172.4,0,168,0z"/>\
                </g>\
                <g class="form f118 path p118 p118_03">\
                    <path d="M0,48L0,48l16,0v16C7.2,64,0,56.8,0,48z"/>\
                </g>\
                <g class="form f118 path p118 p118_04">\
                    <path d="M32,64h-8c-4.4,0-8-3.6-8-8v8v0c0,8.8,7.2,16,16,16V64z"/>\
                </g>\
                <g class="form f118 path p118 p118_05">\
                    <path d="M152,64h-8v16h16V64v-8C160,60.4,156.4,64,152,64z"/>\
                </g>\
                <g class="form f118 path p118 p118_06">\
                    <path d="M176,64L176,64l-16,0v16C168.8,80,176,72.8,176,64z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 119 LETTER W --------------- */
dana_char['d119'] = $('\
    <div class="letter c_119">\
        <div class="letter_W xheight w_xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_119">\
                <g class="form f119 square s119 s119_01">\
                    <rect y="48" width="16" height="16"/>\
                </g>\
                <g class="form f119 square s119 s119_02">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f119 square s119 s119_03">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f119 square s119 s119_04">\
                    <rect y="64" width="16" height="16"/>\
                </g>\
                <g class="form f119 square s119 s119_05">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f119 square s119 s119_06">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f119 square s119 s119_07">\
                    <rect y="80" width="16" height="16"/>\
                </g>\
                <g class="form f119 square s119 s119_08">\
                    <rect x="80" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f119 square s119 s119_09">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f119 square s119 s119_10">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f119 square s119 s119_11">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f119 square s119 s119_12">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f119 square s119 s119_13">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f119 square s119 s119_14">\
                    <rect x="16" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f119 square s119 s119_15">\
                    <rect x="32" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f119 square s119 s119_16">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f119 square s119 s119_17">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f119 square s119 s119_18">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f119 path p119 p119_01">\
                    <path d="M8,32c-4.4,0-8,3.6-8,8v8h16v-8C16,35.6,12.4,32,8,32z"/>\
                </g>\
                <g class="form f119 path p119 p119_02">\
                    <path d="M88,32c-4.4,0-8,3.6-8,8v8h16v-8C96,35.6,92.4,32,88,32z"/>\
                </g>\
                <g class="form f119 path p119 p119_03">\
                    <path d="M168,32c-4.4,0-8,3.6-8,8v8h16v-8C176,35.6,172.4,32,168,32z"/>\
                </g>\
                <g class="form f119 path p119 p119_04">\
                    <path d="M0,96L0,96h16v16C7.2,112,0,104.8,0,96z"/>\
                </g>\
                <g class="form f119 path p119 p119_05">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f119 path p119 p119_06">\
                    <path d="M72,96h-8v16h16V96v-8C80,92.4,76.4,96,72,96z"/>\
                </g>\
                <g class="form f119 path p119 p119_07">\
                    <path d="M96,96L96,96H80v16C88.8,112,96,104.8,96,96z"/>\
                </g>\
                <g class="form f119 path p119 p119_08">\
                    <path d="M112,96h-8c-4.4,0-8-3.6-8-8v8l0,0c0,8.8,7.2,16,16,16V96z"/>\
                </g>\
                <g class="form f119 path p119 p119_09">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f119 path p119 p119_10">\
                    <path d="M176,96L176,96h-16v16C168.8,112,176,104.8,176,96z"/>\
                </g>\
                <g class="form f119 path p119 p119_11">\
                    <path d="M104,96h8v-8h0C112,92.4,108.4,96,104,96z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 120 LETTER X --------------- */
dana_char['d120'] = $('\
    <div class="letter c_120">\
        <div class="letter_X xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_120">\
                <g class="form f120 square s120 s120_01">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f120 square s120 s120_02">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f120 square s120 s120_03">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f120 square s120 s120_04">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f120 square s120 s120_05">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f120 square s120 s120_06">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f120 square s120 s120_07">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f120 square s120 s120_08">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f120 square s120 s120_09">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f120 path p120 p120_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8v8h16V8C16,3.6,12.4,0,8,0z"/>\
                </g>\
                <g class="form f120 path p120 p120_02">\
                    <path d="M168,0c-4.4,0-8,3.6-8,8v8h16V8C176,3.6,172.4,0,168,0z"/>\
                </g>\
                <g class="form f120 path p120 p120_03">\
                    <path d="M16,24v-8H0c0,8.8,7.2,16,16,16h0h8C19.6,32,16,28.4,16,24z"/>\
                </g>\
                <g class="form f120 path p120 p120_04">\
                    <path d="M160,16v8c0,4.4-3.6,8-8,8h8h0c8.8,0,16-7.2,16-16H160z"/>\
                </g>\
                <g class="form f120 path p120 p120_05">\
                    <path d="M0,48L0,48l16,0V32C7.2,32,0,39.2,0,48z"/>\
                </g>\
                <g class="form f120 path p120 p120_06">\
                    <path d="M16,32v16v8c0-4.4,3.6-8,8-8h8V32H16z"/>\
                </g>\
                <g class="form f120 path p120 p120_07">\
                    <path d="M144,32v16h8c4.4,0,8,3.6,8,8v-8V32H144z"/>\
                </g>\
                <g class="form f120 path p120 p120_08">\
                    <path d="M176,48L176,48l-16,0V32C168.8,32,176,39.2,176,48z"/>\
                </g>\
                <g class="form f120 path p120 p120_09">\
                    <path d="M0,64v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H0z"/>\
                </g>\
                <g class="form f120 path p120 p120_10">\
                    <path d="M160,64v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H160z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 121 LETTER Y --------------- */
dana_char['d121'] = $('\
    <div class="letter c_121">\
        <div class="letter_Y descender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_121">\
                <g class="form f121 square s121 s121_01">\
                    <rect x="0" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_02">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_03">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_04">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_05">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_06">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_07">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_08">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_09">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_10">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_11">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_12">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_13">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_14">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_15">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_16">\
                    <rect x="16" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_17">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_18">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_19">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_20">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_21">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_22">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f121 square s121 s121_23">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f121 path p121 p121_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8v8h16V8C16,3.6,12.4,0,8,0z"/>\
                </g>\
                <g class="form f121 path p121 p121_02">\
                    <path d="M168,0c-4.4,0-8,3.6-8,8v8h16V8C176,3.6,172.4,0,168,0z"/>\
                </g>\
                <g class="form f121 path p121 p121_03">\
                    <path d="M0,64L0,64l16,0v16C7.2,80,0,72.8,0,64z"/>\
                </g>\
                <g class="form f121 path p121 p121_04">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g class="form f121 path p121 p121_05">\
                    <path d="M152,64h-8v16h16V64v-8C160,60.4,156.4,64,152,64z"/>\
                </g>\
                <g class="form f121 path p121 p121_06">\
                    <path d="M16,112V96c-4.4,0-8,3.6-8,8S11.6,112,16,112z"/>\
                </g>\
                <g class="form f121 path p121 p121_07">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f121 path p121 p121_08">\
                    <path d="M176,96L176,96l-16,0v16C168.8,112,176,104.8,176,96z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 122 LETTER Z --------------- */
dana_char['d122'] = $('\
    <div class="letter c_122">\
        <div class="letter_Z xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_122">\
                <g class="form f122 square s122 s122_01">\
                    <rect x="16" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_02">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_04">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_05">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_06">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_07">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_08">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_10">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_11">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_12">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_13">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_14">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_15">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_16">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_17">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_18">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_19">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_20">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_21">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_22">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_23">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_24">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f122 square s122 s122_25">\
                    <rect x="144" y="64" width="16" height="16"/>\
                </g>\
                <g  class="form f122 path p122 p122_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8h8V0H8z"/>\
                </g>\
                <g  class="form f122 path p122 p122_02">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g  class="form f122 path p122 p122_03">\
                    <path d="M160,0L160,0l0,16h16C176,7.2,168.8,0,160,0z"/>\
                </g>\
                <g  class="form f122 path p122 p122_04">\
                    <path d="M0,48L0,48l16,0V32C7.2,32,0,39.2,0,48z"/>\
                </g>\
                <g  class="form f122 path p122 p122_05">\
                    <path d="M16,32v16v8c0-4.4,3.6-8,8-8h8V32H16z"/>\
                </g>\
                <g  class="form f122 path p122 p122_06">\
                    <path d="M152,32h-8v16h16V32v-8C160,28.4,156.4,32,152,32z"/>\
                </g>\
                <g  class="form f122 path p122 p122_07">\
                    <path d="M176,32L176,32l-16,0v16C168.8,48,176,40.8,176,32z"/>\
                </g>\
                <g  class="form f122 path p122 p122_08">\
                    <path d="M16,80L16,80l0-16H0C0,72.8,7.2,80,16,80z"/>\
                </g>\
                <g  class="form f122 path p122 p122_09">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g  class="form f122 path p122 p122_10">\
                    <path d="M168,64h-8v16h8c4.4,0,8-3.6,8-8S172.4,64,168,64z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 123 LEFT CURLY BRACKET --------------- */
dana_char['d123'] = $('\
    <div class="vertical_sign c_123">\
        <div class="sign_left_curly_bracket top3">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_123">\
                <g class="form f123 square s123 s123_01">\
                    <rect x="16" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f123 square s123 s123_02">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f123 square s123 s123_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f123 square s123 s123_04">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f123 path p123 p123_01">\
                    <path d="M32,0L32,0v16H16C16,7.2,23.2,0,32,0z"/>\
                </g>\
                <g class="form f123 path p123 p123_02">\
                    <path d="M40,16c4.4,0,8-3.6,8-8s-3.6-8-8-8h-8v16H40z"/>\
                </g>\
                <g class="form f123 path p123 p123_03">\
                    <path d="M32,24v8H16V16h16l0,0h8C35.6,16,32,19.6,32,24z"/>\
                </g>\
                <g class="form f123 path p123 p123_04">\
                    <path d="M16,40v-8h16v16H16l0,0H8C12.4,48,16,44.4,16,40z"/>\
                </g>\
                <g class="form f123 path p123 p123_05">\
                    <path d="M8,64h8V48H8c-4.4,0-8,3.6-8,8S3.6,64,8,64z"/>\
                </g>\
                <g class="form f123 path p123 p123_06">\
                    <path d="M16,72v8h16V64H16l0,0H8C12.4,64,16,67.6,16,72z"/>\
                </g>\
                <g class="form f123 path p123 p123_07">\
                    <path d="M32,88v-8H16v16h16l0,0h8C35.6,96,32,92.4,32,88z"/>\
                </g>\
                <g class="form f123 path p123 p123_08">\
                    <path d="M16,96L16,96h16v16C23.2,112,16,104.8,16,96z"/>\
                </g>\
                <g class="form f123 path p123 p123_09">\
                    <path d="M40,112c4.4,0,8-3.6,8-8s-3.6-8-8-8h-8v16H40z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 124 VERTICAL LINE --------------- */
dana_char['d124'] = $('\
    <div class="vertical_sign c_124">\
        <div class="sign_vertical_line top1">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_124">\
                <g class="form f124 square s124 s124_01">\
                    <rect y="48" width="16" height="16"/>\
                </g>\
                <g class="form f124 square s124 s124_02">\
                    <rect y="64" width="16" height="16"/>\
                </g>\
                <g class="form f124 square s124 s124_03">\
                    <rect y="80" width="16" height="16"/>\
                </g>\
                <g class="form f124 square s124 s124_04">\
                    <rect y="96" width="16" height="16"/>\
                </g>\
                <g class="form f124 square s124 s124_05">\
                    <rect y="112" width="16" height="16"/>\
                </g>\
                <g class="form f124 square s124 s124_06">\
                    <rect x="16" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f124 square s124 s124_07">\
                    <rect x="32" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f124 square s124 s124_08">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f124 path p124 p124_01">\
                    <path d="M8,32c-4.4,0-8,3.6-8,8v8h16v-8C16,35.6,12.4,32,8,32z"/>\
                </g>\
                <g class="form f124 path p124 p124_02">\
                    <path d="M0,128v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H0z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 125 RIGHT CURLY BRACKET --------------- */
dana_char['d125'] = $('\
    <div class="vertical_sign c_125">\
        <div class="sign_right_curly_bracket top3">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_125">\
                <g class="form f125 square s125 s125_01">\
                    <rect x="16" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f125 square s125 s125_02">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f125 square s125 s125_03">\
                    <rect x="48" width="16" height="16"/>\
                </g>\
                <g class="form f125 square s125 s125_04">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f125 path p125 p125_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8h8V0H8z"/>\
                </g>\
                <g class="form f125 path p125 p125_02">\
                    <path d="M32,16L32,16l-16,0V0C24.8,0,32,7.2,32,16z"/>\
                </g>\
                <g class="form f125 path p125 p125_03">\
                    <path d="M16,24v8h16V16H16v0H8C12.4,16,16,19.6,16,24z"/>\
                </g>\
                <g class="form f125 path p125 p125_04">\
                    <path d="M32,40v-8H16v16h16v0h8C35.6,48,32,44.4,32,40z"/>\
                </g>\
                <g class="form f125 path p125 p125_05">\
                    <path d="M40,48h-8v16h8c4.4,0,8-3.6,8-8S44.4,48,40,48z"/>\
                </g>\
                <g class="form f125 path p125 p125_06">\
                    <path d="M32,72v8H16V64h16v0h8C35.6,64,32,67.6,32,72z"/>\
                </g>\
                <g class="form f125 path p125 p125_07">\
                    <path d="M16,88v-8h16v16H16v0H8C12.4,96,16,92.4,16,88z"/>\
                </g>\
                <g class="form f125 path p125 p125_08">\
                    <path d="M8,96c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V96H8z"/>\
                </g>\
                <g class="form f125 path p125 p125_09">\
                    <path d="M16,112L16,112l0-16h16C32,104.8,24.8,112,16,112z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 126 TILDE --------------- */
dana_char['d126'] = $('\
    <div class="horizontal_sign c_126">\
        <div class="sign_tilde top7">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_126">\
                <g class="form f126 square s126 s126_01">\
                    <rect x="16" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f126 square s126 s126_02">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f126 square s126 s126_03">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f126 square s126 s126_04">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f126 square s126 s126_05">\
                    <rect x="96" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f126 square s126 s126_06">\
                    <rect x="112" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f126 square s126 s126_07">\
                    <rect x="128" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f126 square s126 s126_08">\
                    <rect x="144" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f126 path p126 p126_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8h8V0H8z"/>\
                </g>\
                <g class="form f126 path p126 p126_02">\
                    <path d="M96,16L96,16l-16,0V0C88.8,0,96,7.2,96,16z"/>\
                </g>\
                <g class="form f126 path p126 p126_03">\
                    <path d="M80,16L80,16l16,0v16C87.2,32,80,24.8,80,16z"/>\
                </g>\
                <g class="form f126 path p126 p126_04">\
                    <path d="M168,16h-8v16h8c4.4,0,8-3.6,8-8S172.4,16,168,16z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 128 EURO SIGN --------------- */
dana_char['d128'] = $('\
    <div class="horizontal_sign c_128">\
        <div class="sign_euro_sign ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_128">\
                <g class="form f128 square s128 s128_01">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_02">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_03">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_04">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_05">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_06">\
                    <rect x="144" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_07">\
                    <rect x="32" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_08">\
                    <rect x="16" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_09">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_10">\
                    <rect x="47.8" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_11">\
                    <rect x="63.8" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_12">\
                    <rect x="79.8" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_13">\
                    <rect x="95.8" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_14">\
                    <rect x="111.8" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_15">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_16">\
                    <rect x="16" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_17">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_18">\
                    <rect x="47.8" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_19">\
                    <rect x="63.8" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_20">\
                    <rect x="79.8" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_21">\
                    <rect x="95.8" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_22">\
                    <rect x="32" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_23">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_24">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_25">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_26">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_27">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f128 square s128 s128_28">\
                    <rect x="144" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f128 path p128 p128_01">\
                    <path d="M32,16L32,16h16V0C39.2,0,32,7.2,32,16z"/>\
                </g>\
                <g class="form f128 path p128 p128_02">\
                    <path d="M48,0v16v8c0-4.4,3.6-8,8-8h8V0H48z"/>\
                </g>\
                <g class="form f128 path p128 p128_03">\
                    <path d="M167.9,16c4.4,0,8-3.6,8-8s-3.6-8-8-8h-8v16H167.9z"/>\
                </g>\
                <g class="form f128 path p128 p128_04">\
                    <path d="M8,32c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V32H8z"/>\
                </g>\
                <g class="form f128 path p128 p128_05">\
                    <path d="M135.8,48c4.4,0,8-3.6,8-8s-3.6-8-8-8h-8v16H135.8z"/>\
                </g>\
                <g class="form f128 path p128 p128_06">\
                    <path d="M8,64c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V64H8z"/>\
                </g>\
                <g class="form f128 path p128 p128_07">\
                    <path d="M119.8,80c4.4,0,8-3.6,8-8s-3.6-8-8-8h-8v16H119.8z"/>\
                </g>\
                <g class="form f128 path p128 p128_08">\
                    <path d="M32,96L32,96h16v16C39.2,112,32,104.8,32,96z"/>\
                </g>\
                <g class="form f128 path p128 p128_09">\
                    <path d="M56,96c-4.4,0-8-3.6-8-8v8v16h16V96H56z"/>\
                </g>\
                <g class="form f128 path p128 p128_10">\
                    <path d="M167.9,112c4.4,0,8-3.6,8-8s-3.6-8-8-8h-8v16H167.9z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 133 HORIZONTAL ELLIPSIS --------------- */
dana_char['d133'] = $('\
    <div class="vertical_sign c_133">\
        <div class="sign_horizontal_ellipsis top9">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_133">\
                <g class="form f133 circle c133 c133_01">\
                    <circle cx="8" cy="8" r="8"/>\
                </g>\
                <g class="form f133 circle c133 c133_02">\
                    <circle cx="40" cy="8" r="8"/>\
                </g>\
                <g class="form f133 circle c133 c133_03">\
                    <circle cx="72" cy="8" r="8"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 145 LEFT SINGLE QUOTATION MARK --------------- */
dana_char['d145'] = $('\
    <div class="vertical_sign c_145">\
        <div class="sign_left_single_quoutation_mark top3">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_145">\
                <g class="form f145 path p145 p145_01">\
                    <path d="M16,16V8c0-4.4,3.6-8,8-8h-8h0C7.2,0,0,7.2,0,16H16z"/>\
                </g>\
                <g class="form f145 path p145 p145_02">\
                    <path d="M8,32c4.4,0,8-3.6,8-8v-8H0v8C0,28.4,3.6,32,8,32z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 146 RIGHT SINGLE QUOTATION MARK --------------- */
dana_char['d146'] = $('\
    <div class="vertical_sign c_146">\
        <div class="sign_right_single_quoutation_mark top3path">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_146">\
                <g class="form f146 path p146 p146_01">\
                    <path d="M16,0c-4.4,0-8,3.6-8,8v8h16V8C24,3.6,20.4,0,16,0z"/>\
                </g>\
                <g class="form f146 path p146 p146_02">\
                    <path d="M8,16v8c0,4.4-3.6,8-8,8h8h0c8.8,0,16-7.2,16-16H8z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 147 LEFT DOUBLE QUOTATION MARK --------------- */
dana_char['d147'] = $('\
    <div class="vertical_sign c_147">\
        <div class="sign_left_double_quoutation_mark top3">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_147">\
                <g class="form f147 path p147 p147_01">\
                    <path d="M16,16V8c0-4.4,3.6-8,8-8h-8l0,0C7.2,0,0,7.2,0,16H16z"/>\
                </g>\
                <g class="form f147 path p147 p147_02">\
                    <path d="M40,16V8c0-4.4,3.6-8,8-8h-8l0,0c-8.8,0-16,7.2-16,16H40z"/>\
                </g>\
                <g class="form f147 path p147 p147_03">\
                    <path d="M8,32c4.4,0,8-3.6,8-8v-8H0v8C0,28.4,3.6,32,8,32z"/>\
                </g>\
                <g class="form f147 path p147 p147_04">\
                    <path d="M32,32c4.4,0,8-3.6,8-8v-8H24v8C24,28.4,27.6,32,32,32z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 148 RIGHT DOUBLE QUOTATION MARK --------------- */
dana_char['d148'] = $('\
    <div class="vertical_sign c_148">\
        <div class="sign_right_double_quoutation_mark top3path">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_148">\
                <g class="form f148 path p148 p148_01">\
                    <path d="M16,0c-4.4,0-8,3.6-8,8v8h16V8C24,3.6,20.4,0,16,0z"/>\
                </g>\
                <g class="form f148 path p148 p148_02">\
                    <path d="M40,0c-4.4,0-8,3.6-8,8v8h16V8C48,3.6,44.4,0,40,0z"/>\
                </g>\
                <g class="form f148 path p148 p148_03">\
                    <path d="M8,16v8c0,4.4-3.6,8-8,8h8l0,0c8.8,0,16-7.2,16-16H8z"/>\
                </g>\
                <g class="form f148 path p148 p148_04">\
                    <path d="M32,16v8c0,4.4-3.6,8-8,8h8l0,0c8.8,0,16-7.2,16-16H32z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 161 INVERTED EXCLAMATION MARK --------------- */
dana_char['d161'] = $('\
    <div class="vertical_sign c_161">\
        <div class="sign_inverted_exclamation_mark top5">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_161">\
                <g class="form f161 square s161 s161_01">\
                    <rect x="0" y="47.8" width="16" height="15.9"/>\
                </g>\
                <g class="form f161 square s161 s161_02">\
                    <rect x="0" y="63.7" width="16" height="15.9"/>\
                </g>\
                <g class="form f161 square s161 s161_03">\
                    <rect x="0" y="79.6" width="16" height="15.9"/>\
                </g>\
                <g class="form f161 square s161 s161_04">\
                    <rect x="16" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f161 square s161 s161_05">\
                    <rect x="32" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f161 square s161 s161_06">\
                    <rect x="48" width="16" height="16"/>\
                </g>\
                <g class="form f161 circle c161 c161_01">\
                    <circle cx="8" cy="8" r="8"/>\
                </g>\
                <g class="form f161 path p161 p161_02">\
                    <path d="M8,31.9c-4.4,0-8,3.6-8,8v8h16v-8C16,35.4,12.4,31.9,8,31.9z"/>\
                </g>\
                <g class="form f161 path p161 p161_03">\
                    <path d="M0,95.6v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H0z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 163 POUND SIGN --------------- */
dana_char['d163'] = $('\
    <div class="horizontal_sign c_163">\
        <div class="sign_pound_sign ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_163">\
                <g class="form f163 square s163 s163_01">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f163 square s163 s163_02">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f163 square s163 s163_03">\
                    <rect x="32" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f163 square s163 s163_04">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f163 square s163 s163_05">\
                    <rect x="16" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f163 square s163 s163_06">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f163 square s163 s163_07">\
                    <rect x="47.8" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f163 square s163 s163_08">\
                    <rect x="63.8" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f163 square s163 s163_09">\
                    <rect x="79.8" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f163 square s163 s163_10">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f163 square s163 s163_11">\
                    <rect x="32" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f163 square s163 s163_12">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f163 square s163 s163_13">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f163 square s163 s163_14">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f163 square s163 s163_15">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f163 square s163 s163_16">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f163 square s163 s163_17">\
                    <rect x="144" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f163 path p163 p163_01">\
                    <path d="M32,16L32,16h16V0C39.2,0,32,7.2,32,16z"/>\
                </g>\
                <g class="form f163 path p163 p163_02">\
                    <path d="M48,0v16v8c0-4.4,3.6-8,8-8h8V0H48z"/>\
                </g>\
                <g class="form f163 path p163 p163_03">\
                    <path d="M112,0v16v8c0-4.4-3.6-8-8-8h-8V0H112z"/>\
                </g>\
                <g class="form f163 path p163 p163_04">\
                    <path d="M128,16L128,16h-16V0C120.8,0,128,7.2,128,16z"/>\
                </g>\
                <g class="form f163 path p163 p163_05">\
                    <path d="M112,24c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V24z"/>\
                </g>\
                <g class="form f163 path p163 p163_06">\
                    <path d="M8,48c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V48H8z"/>\
                </g>\
                <g class="form f163 path p163 p163_07">\
                    <path d="M103.8,64c4.4,0,8-3.6,8-8s-3.6-8-8-8h-8v16H103.8z"/>\
                </g>\
                <g class="form f163 path p163 p163_08">\
                    <path d="M32,96L32,96h16v16C39.2,112,32,104.8,32,96z"/>\
                </g>\
                <g class="form f163 path p163 p163_09">\
                    <path d="M56,96c-4.4,0-8-3.6-8-8v8v16h16V96H56z"/>\
                </g>\
                <g class="form f163 path p163 p163_10">\
                    <path d="M168,112c4.4,0,8-3.6,8-8s-3.6-8-8-8h-8v16H168z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 169 COPYRIGHT SIGN --------------- */
dana_char['d169'] = $('\
    <div class="horizontal_sign c_169">\
        <div class="sign_copyright_sign ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_169">\
                <g class="form f169 square s169 s169_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_08">\
                    <rect y="16" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_10">\
                    <rect y="32" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_11">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_12">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_13">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_14">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_15">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_16">\
                    <rect y="48" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_17">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_18">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_19">\
                    <rect y="64" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_20">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_21">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_22">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_23">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_24">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_25">\
                    <rect y="80" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_26">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_27">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_28">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_29">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_30">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_31">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_32">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f169 square s169 s169_33">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f169 path p169 p169_01">\
                    <path d="M16,0L16,0v16H0C0,7.2,7.2,0,16,0z"/>\
                </g>\
                <g class="form f169 path p169 p169_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8h8V0H16z"/>\
                </g>\
                <g class="form f169 path p169 p169_03">\
                    <path d="M144,0v16h8c4.4,0,8,3.6,8,8v-8V0H144z"/>\
                </g>\
                <g class="form f169 path p169 p169_04">\
                    <path d="M176,16L176,16h-16V0C168.8,0,176,7.2,176,16z"/>\
                </g>\
                <g class="form f169 path p169 p169_05">\
                    <path d="M32,48L32,48h16V32C39.2,32,32,39.2,32,48z"/>\
                </g>\
                <g class="form f169 path p169 p169_06">\
                    <path d="M48,32v16v8c0-4.4,3.6-8,8-8h8V32H48z"/>\
                </g>\
                <g class="form f169 path p169 p169_07">\
                    <rect x="128" y="32" width="8" height="16"/>\
                </g>\
                <g class="form f169 path p169 p169_08">\
                    <path d="M48,80L48,80V64H32C32,72.8,39.2,80,48,80z"/>\
                </g>\
                <g class="form f169 path p169 p169_09">\
                    <path d="M56,64c-4.4,0-8-3.6-8-8v8v16h16V64H56z"/>\
                </g>\
                <g class="form f169 path p169 p169_10">\
                    <rect x="128" y="64" width="8" height="16"/>\
                </g>\
                <g class="form f169 path p169 p169_11">\
                    <path d="M0,96L0,96h16v16C7.2,112,0,104.8,0,96z"/>\
                </g>\
                <g class="form f169 path p169 p169_12">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f169 path p169 p169_13">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f169 path p169 p169_14">\
                    <path d="M160,112L160,112V96h16C176,104.8,168.8,112,160,112z"/>\
                </g>\
                <g class="form f169 path p169 p169_15">\
                    <path d="M136,32v16c4.4,0,8-3.6,8-8S140.4,32,136,32z"/>\
                </g>\
                <g class="form f169 path p169 p169_16">\
                    <path d="M136,64v16c4.4,0,8-3.6,8-8S140.4,64,136,64z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 191 INVERTED QUESTION MARK --------------- */
dana_char['d191'] = $('\
    <div class="horizontal_sign c_161">\
        <div class="sign_inverted_question_mark xheight">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_161">\
                <g class="form f191 square s191 s191_01">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f191 square s191 s191_02">\
                    <rect x="48" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f191 square s191 s191_03">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f191 square s191 s191_04">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f191 square s191 s191_05">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f191 square s191 s191_06">\
                    <rect x="112" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f191 square s191 s191_07">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f191 square s191 s191_08">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f191 square s191 s191_09">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f191 square s191 s191_10">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f191 square s191 s191_11">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f191 square s191 s191_12">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f191 square s191 s191_13">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f191 square s191 s191_14">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f191 square s191 s191_15">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f191 square s191 s191_16">\
                    <rect x="144" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f191 circle c191 c191_01">\
                    <circle cx="136" cy="8" r="8"/>\
                </g>\
                <g class="form f191 path p191 p191_02">\
                    <path d="M136,32c-4.4,0-8,3.6-8,8v8h16v-8C144,35.6,140.4,32,136,32z"/>\
                </g>\
                <g class="form f191 path p191 p191_03">\
                    <path d="M16,48L16,48l0,16H0C0,55.2,7.2,48,16,48z"/>\
                </g>\
                <g class="form f191 path p191 p191_04">\
                    <path d="M16,48v16v8c0-4.4,3.6-8,8-8h8V48H16z"/>\
                </g>\
                <g class="form f191 path p191 p191_05">\
                    <path d="M128,64L128,64l0-16h16C144,56.8,136.8,64,128,64z"/>\
                </g>\
                <g class="form f191 path p191 p191_06">\
                    <path d="M0,96L0,96l16,0v16C7.2,112,0,104.8,0,96z"/>\
                </g>\
                <g class="form f191 path p191 p191_07">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f191 path p191 p191_08">\
                    <path d="M168,96h-8v16h8c4.4,0,8-3.6,8-8S172.4,96,168,96z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 241 LETTER Ñ (N TILDE) --------------- */
dana_char['d241'] = $('\
    <div class="letter c_241">\
        <div class="letter_NN ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_241">\
                <g class="form f241 square s241 s241_01">\
                    <rect x="32" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_02">\
                    <rect x="48" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_03">\
                    <rect x="64" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_04">\
                    <rect x="80" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_05">\
                    <rect x="96" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_06">\
                    <rect x="112" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_07">\
                    <rect x="128" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_08">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_09">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_10">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_11">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_12">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_13">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_14">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_15">\
                    <rect y="48" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_16">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_17">\
                    <rect y="64" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_18">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_19">\
                    <rect y="80" width="16" height="16"/>\
                </g>\
                <g class="form f241 square s241 s241_20">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f241 path p241 p241_01">\
                    <path d="M24,0c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V0H24z"/>\
                </g>\
                <g class="form f241 path p241 p241_02">\
                    <path d="M152,0h-8v16h8c4.4,0,8-3.6,8-8S156.4,0,152,0z"/>\
                </g>\
                <g class="form f241 path p241 p241_03">\
                    <path d="M0,48L0,48l16,0V32C7.2,32,0,39.2,0,48z"/>\
                </g>\
                <g class="form f241 path p241 p241_04">\
                    <path d="M16,32v16v8c0-4.4,3.6-8,8-8h8V32H16z"/>\
                </g>\
                <g class="form f241 path p241 p241_05">\
                    <path d="M144,32v16h8c4.4,0,8,3.6,8,8v-8V32H144z"/>\
                </g>\
                <g class="form f241 path p241 p241_06">\
                    <path d="M176,48L176,48l-16,0V32C168.8,32,176,39.2,176,48z"/>\
                </g>\
                <g class="form f241 path p241 p241_07">\
                    <path d="M0,96v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H0z"/>\
                </g>\
                <g class="form f241 path p241 p241_08">\
                    <path d="M160,96v8c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H160z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 225 LETTER A ACUTE --------------- */
dana_char['d225'] = $('\
    <div class="letter c_225">\
        <div class="letter_AACUTE ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_225">\
                <g class="form f225 square s225 s225_01">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_02">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_03">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_04">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_05">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_06">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_07">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_08">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_09">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_10">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_11">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_12">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_13">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_14">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_15">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_16">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_17">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_18">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_19">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_20">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_21">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_22">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_23">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_24">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f225 square s225 s225_25">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f225 path p225 p225_01">\
                    <path d="M32,48V32c-4.4,0-8,3.6-8,8S27.6,48,32,48z"/>\
                </g>\
                <g class="form f225 path p225 p225_02">\
                    <path d="M144,32v16h8c4.4,0,8,3.6,8,8v-8V32H144z"/>\
                </g>\
                <g class="form f225 path p225 p225_03">\
                    <path d="M176,48L176,48l-16,0V32C168.8,32,176,39.2,176,48z"/>\
                </g>\
                <g class="form f225 path p225 p225_04">\
                    <path d="M0,80L0,80l16,0V64C7.2,64,0,71.2,0,80z"/>\
                </g>\
                <g class="form f225 path p225 p225_05">\
                    <path d="M16,64v16v8c0-4.4,3.6-8,8-8h8V64H16z"/>\
                </g>\
                <g class="form f225 path p225 p225_06">\
                    <path d="M144,64v16h8c4.4,0,8,3.6,8,8v-8V64H144z"/>\
                </g>\
                <g class="form f225 path p225 p225_07">\
                    <path d="M16,112L16,112l0-16H0C0,104.8,7.2,112,16,112z"/>\
                </g>\
                <g class="form f225 path p225 p225_08">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f225 path p225 p225_09">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f225 path p225 p225_10">\
                    <path d="M160,112L160,112l0-16h16C176,104.8,168.8,112,160,112z"/>\
                </g>\
                <g class="form f225 path p225 p225_11">\
                    <path d="M88,0c-4.4,0-8,3.6-8,8v8h16V8C96,3.6,92.4,0,88,0z"/>\
                </g>\
                <g class="form f225 path p225 p225_12">\
                    <path d="M96,16H80c0,4.4,3.6,8,8,8S96,20.4,96,16z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 233 LETTER E ACUTE --------------- */
dana_char['d233'] = $('\
    <div class="letter c_233">\
        <div class="letter_EACUTE ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_233">\
                <g class="form f233 square s233 s233_01">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_02">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_03">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_04">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_05">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_06">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_07">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_08">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_09">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_10">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_11">\
                    <rect x="32" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_12">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_13">\
                    <rect x="64" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_14">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_15">\
                    <rect x="96" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_16">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_17">\
                    <rect x="128" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_18">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_19">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_20">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_21">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_22">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_23">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_24">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_25">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f233 square s233 s233_26">\
                    <rect x="144" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f233 path p233 p233_01">\
                    <path d="M16,32L16,32l0,16H0C0,39.2,7.2,32,16,32z"/>\
                </g>\
                <g class="form f233 path p233 p233_02">\
                    <path d="M16,32v16v8c0-4.4,3.6-8,8-8h8V32H16z"/>\
                </g>\
                <g class="form f233 path p233 p233_03">\
                    <path d="M144,32v16h8c4.4,0,8,3.6,8,8v-8V32H144z"/>\
                </g>\
                <g class="form f233 path p233 p233_04">\
                    <path d="M160,32L160,32l0,16h16C176,39.2,168.8,32,160,32z"/>\
                </g>\
                <g class="form f233 path p233 p233_05">\
                    <path d="M24,64c-4.4,0-8-3.6-8-8v8v16h16V64H24z"/>\
                </g>\
                <g class="form f233 path p233 p233_06">\
                    <path d="M152,64h-8v16h16V64v-8C160,60.4,156.4,64,152,64z"/>\
                </g>\
                <g class="form f233 path p233 p233_07">\
                    <path d="M176,64L176,64l-16,0v16C168.8,80,176,72.8,176,64z"/>\
                </g>\
                <g class="form f233 path p233 p233_08">\
                    <path d="M0,96L0,96l16,0v16C7.2,112,0,104.8,0,96z"/>\
                </g>\
                <g class="form f233 path p233 p233_09">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f233 path p233 p233_10">\
                    <path d="M160,96v16c4.4,0,8-3.6,8-8S164.4,96,160,96z"/>\
                </g>\
                <g class="form f233 path p233 p233_11">\
                    <path d="M88,0c-4.4,0-8,3.6-8,8v8h16V8C96,3.6,92.4,0,88,0z"/>\
                </g>\
                <g class="form f233 path p233 p233_12">\
                    <path d="M96,16H80c0,4.4,3.6,8,8,8S96,20.4,96,16z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 237 LETTER I ACUTE --------------- */
dana_char['d237'] = $('\
    <div class="letter c_237">\
        <div class="letter_IACUTE ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_237">\
                <g class="form f237 square s237 s237_01">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f237 square s237 s237_02">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f237 square s237 s237_03">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f237 square s237 s237_04">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f237 square s237 s237_05">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f237 square s237 s237_06">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f237 square s237 s237_07">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f237 square s237 s237_08">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f237 square s237 s237_09">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f237 square s237 s237_10">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f237 square s237 s237_11">\
                    <rect x="144" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f237 path p237 p237_01">\
                    <path d="M8,0C3.6,0,0,3.6,0,8v8h16V8C16,3.6,12.4,0,8,0z"/>\
                </g>\
                <g class="form f237 path p237 p237_02">\
                    <path d="M8,32c-4.4,0-8,3.6-8,8v8h16v-8C16,35.6,12.4,32,8,32z"/>\
                </g>\
                <g class="form f237 path p237 p237_03">\
                    <path d="M0,96L0,96l16,0v16C7.2,112,0,104.8,0,96z"/>\
                </g>\
                <g class="form f237 path p237 p237_04">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f237 path p237 p237_05">\
                    <path d="M168,96h-8v16h8c4.4,0,8-3.6,8-8S172.4,96,168,96z"/>\
                </g>\
                <g class="form f237 path p237 p237_06">\
                    <path d="M16,16H0c0,4.4,3.6,8,8,8S16,20.4,16,16z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 243 LETTER O ACUTE --------------- */
dana_char['d243'] = $('\
    <div class="letter c_243">\
        <div class="letter_OACUTE ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_243">\
                <g class="form f243 square s243 s243_01">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_02">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_03">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_04">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_05">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_06">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_07">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_08">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_09">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_10">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_11">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_12">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_13">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_14">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_15">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_16">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_17">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_18">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_19">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f243 square s243 s243_20">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f243 path p243 p243_01">\
                    <path d="M0,48L0,48l16,0V32C7.2,32,0,39.2,0,48z"/>\
                </g>\
                <g class="form f243 path p243 p243_02">\
                    <path d="M16,32v16v8c0-4.4,3.6-8,8-8h8V32H16z"/>\
                </g>\
                <g class="form f243 path p243 p243_03">\
                    <path d="M144,32v16h8c4.4,0,8,3.6,8,8v-8V32H144z"/>\
                </g>\
                <g class="form f243 path p243 p243_04">\
                    <path d="M176,48L176,48l-16,0V32C168.8,32,176,39.2,176,48z"/>\
                </g>\
                <g class="form f243 path p243 p243_05">\
                    <path d="M16,112L16,112l0-16H0C0,104.8,7.2,112,16,112z"/>\
                </g>\
                <g class="form f243 path p243 p243_06">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f243 path p243 p243_07">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f243 path p243 p243_08">\
                    <path d="M160,112L160,112l0-16h16C176,104.8,168.8,112,160,112z"/>\
                </g>\
                <g class="form f243 path p243 p243_09">\
                    <path d="M88,0c-4.4,0-8,3.6-8,8v8h16V8C96,3.6,92.4,0,88,0z"/>\
                </g>\
                <g class="form f243 path p243 p243_10">\
                    <path d="M96,16H80c0,4.4,3.6,8,8,8S96,20.4,96,16z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 250 LETTER U ACUTE --------------- */
dana_char['d250'] = $('\
    <div class="letter c_250">\
        <div class="letter_UACUTE ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_250">\
                <g class="form f250 square s250 s250_01">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f250 square s250 s250_02">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f250 square s250 s250_03">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f250 square s250 s250_04">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f250 square s250 s250_05">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f250 square s250 s250_06">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f250 square s250 s250_07">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f250 square s250 s250_08">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f250 square s250 s250_09">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f250 square s250 s250_10">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f250 square s250 s250_11">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f250 square s250 s250_12">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f250 square s250 s250_13">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f250 path p250 p250_01">\
                    <path d="M8,32c-4.4,0-8,3.6-8,8v8h16v-8C16,35.6,12.4,32,8,32z"/>\
                </g>\
                <g class="form f250 path p250 p250_02">\
                    <path d="M168,32c-4.4,0-8,3.6-8,8v8h16v-8C176,35.6,172.4,32,168,32z"/>\
                </g>\
                <g class="form f250 path p250 p250_03">\
                    <path d="M0,96L0,96l16,0v16C7.2,112,0,104.8,0,96z"/>\
                </g>\
                <g class="form f250 path p250 p250_04">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f250 path p250 p250_05">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f250 path p250 p250_06">\
                    <path d="M176,96L176,96l-16,0v16C168.8,112,176,104.8,176,96z"/>\
                </g>\
                <g class="form f250 path p250 p250_07">\
                    <path d="M88,0c-4.4,0-8,3.6-8,8v8h16V8C96,3.6,92.4,0,88,0z"/>\
                </g>\
                <g class="form f250 path p250 p250_08">\
                    <path d="M96,16H80c0,4.4,3.6,8,8,8S96,20.4,96,16z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 252 LETTER U DIAERESIS --------------- */
dana_char['d252'] = $('\
    <div class="letter c_252">\
        <div class="letter_UDIAERESIS ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_252">\
                <g class="form f252 square s252 s252_01">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f252 square s252 s252_02">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f252 square s252 s252_03">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f252 square s252 s252_04">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f252 square s252 s252_05">\
                    <rect x="0" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f252 square s252 s252_06">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f252 square s252 s252_07">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f252 square s252 s252_08">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f252 square s252 s252_09">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f252 square s252 s252_10">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f252 square s252 s252_11">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f252 square s252 s252_12">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f252 square s252 s252_13">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f252 path p252 p252_01">\
                    <path d="M8,32c-4.4,0-8,3.6-8,8v8h16v-8C16,35.6,12.4,32,8,32z"/>\
                </g>\
                <g class="form f252 path p252 p252_02">\
                    <path d="M168,32c-4.4,0-8,3.6-8,8v8h16v-8C176,35.6,172.4,32,168,32z"/>\
                </g>\
                <g class="form f252 path p252 p252_03">\
                    <path d="M0,96L0,96l16,0v16C7.2,112,0,104.8,0,96z"/>\
                </g>\
                <g class="form f252 path p252 p252_04">\
                    <path d="M24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f252 path p252 p252_05">\
                    <path d="M152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f252 path p252 p252_06">\
                    <path d="M176,96L176,96l-16,0v16C168.8,112,176,104.8,176,96z"/>\
                </g>\
                <g class="form f252 circle c252 c252_07">\
                    <circle class="st0" cx="8" cy="8" r="8"/>\
                </g>\
                <g class="form f252 circle c252 c252_08">\
                    <circle class="st0" cx="168" cy="8" r="8"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 65 ICON 01 --------------- */
dana_char['d65'] = $('\
    <div class="icon c_65">\
        <div class="icon_01 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_65">\
                <g class="form f65 square s65 s65_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_08">\
                    <rect y="16" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_10">\
                    <rect y="32" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_11">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_12">\
                    <rect y="48" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_13">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_14">\
                    <rect y="64" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_15">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_16">\
                    <rect y="80" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_17">\
                    <rect x="160" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_18">\
                    <rect x="32" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_19">\
                    <rect x="48" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_20">\
                    <rect x="64" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_21">\
                    <rect x="80" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_22">\
                    <rect x="96" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_23">\
                    <rect x="112" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f65 square s65 s65_24">\
                    <rect x="128" y="96" width="16" height="16"/>\
                </g>\
                <g class="form f65 path p65 p65_01">\
                    <path d="M16,0L16,0v16H0C0,7.2,7.2,0,16,0z"/>\
                </g>\
                <g class="form f65 path p65 p65_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8l0,0h8V0H16z"/>\
                </g>\
                <g class="form f65 path p65 p65_03">\
                    <path d="M160,0v16v8c0-4.4-3.6-8-8-8l0,0h-8V0H160z"/>\
                </g>\
                <g class="form f65 path p65 p65_04">\
                    <path d="M160,0L160,0v16h16C176,7.2,168.8,0,160,0z"/>\
                </g>\
                <g class="form f65 circle c65 c65_05">\
                    <circle cx="48" cy="64" r="10.5"/>\
                </g>\
                <g class="form f65 circle c65 c65_06">\
                    <circle cx="128" cy="64" r="10.5"/>\
                </g>\
                <g class="form f65 path p65 p65_07">\
                    <path d="M16,112L16,112V96H0C0,104.8,7.2,112,16,112z"/>\
                </g>\
                <g class="form f65 path p65 p65_08">\
                    <path d="M16,112V96v-8c0,4.4,3.6,8,8,8l0,0h8v16H16z"/>\
                </g>\
                <g class="form f65 path p65 p65_09">\
                    <path d="M160,112V96v-8c0,4.4-3.6,8-8,8l0,0h-8v16H160z"/>\
                </g>\
                <g class="form f65 path p65 p65_10">\
                    <path d="M160,112L160,112V96h16C176,104.8,168.8,112,160,112z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 66 ICON 02 --------------- */
dana_char['d66'] = $('\
    <div class="icon c_66">\
        <div class="icon_02 none">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_66">\
                <g class="form f66 square s66 s66_01">\
                    <rect x="48" y="48" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_02">\
                    <rect x="64" y="48" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_03">\
                    <rect x="80" y="48" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_04">\
                    <rect x="96" y="48" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_05">\
                    <rect x="112" y="48" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_06">\
                    <rect x="16" y="64" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_07">\
                    <rect x="144" y="64" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_08">\
                    <rect x="16" y="80" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_09">\
                    <rect x="144" y="80" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_10">\
                    <rect x="16" y="96" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_11">\
                    <rect x="144" y="96" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_12">\
                    <rect x="16" y="112" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_13">\
                    <rect x="144" y="112" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_14">\
                    <rect x="16" y="128" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_15">\
                    <rect x="144" y="128" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_16">\
                    <rect x="48" y="144" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_17">\
                    <rect x="64" y="144" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_18">\
                    <rect x="80" y="144" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_19">\
                    <rect x="96" y="144" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_20">\
                    <rect x="112" y="144" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_21">\
                    <rect x="32" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 square s66 s66_22">\
                    <rect x="128" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f66 path p66 p66_01">\
                    <path class="st0" d="M32,48L32,48v16H16C16,55.2,23.2,48,32,48z"/>\
                </g>\
                <g class="form f66 path p66 p66_02">\
                    <path class="st0" d="M32,48v16v8c0-4.4,3.6-8,8-8l0,0h8V48H32z"/>\
                </g>\
                <g class="form f66 path p66 p66_03">\
                    <path class="st0" d="M144,48v16v8c0-4.4-3.6-8-8-8l0,0h-8V48H144z"/>\
                </g>\
                <g class="form f66 path p66 p66_04">\
                    <path class="st0" d="M144,48L144,48v16h16C160,55.2,152.8,48,144,48z"/>\
                </g>\
                <g class="form f66 path p66 p66_05">\
                    <path class="st0" d="M8,64c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V64H8z"/>\
                </g>\
                <g class="form f66 path p66 p66_06">\
                    <path class="st0" d="M168,80c4.4,0,8-3.6,8-8s-3.6-8-8-8h-8v16H168z"/>\
                </g>\
                <g class="form f66 path p66 p66_07">\
                    <path class="st0" d="M8,96c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V96H8z"/>\
                </g>\
                <g class="form f66 path p66 p66_08">\
                    <path class="st0" d="M168,112c4.4,0,8-3.6,8-8s-3.6-8-8-8h-8v16H168z"/>\
                </g>\
                <g class="form f66 circle c66 c66_09">\
                    <circle class="st0" cx="48" cy="112" r="10.5"/>\
                </g>\
                <g class="form f66 circle c66 c66_10">\
                    <circle class="st0" cx="128" cy="112" r="10.5"/>\
                </g>\
                <g class="form f66 path p66 p66_11">\
                    <path class="st0" d="M8,128c-4.4,0-8,3.6-8,8s3.6,8,8,8h8v-16H8z"/>\
                </g>\
                <g class="form f66 path p66 p66_12">\
                    <path class="st0" d="M168,144c4.4,0,8-3.6,8-8s-3.6-8-8-8h-8v16H168z"/>\
                </g>\
                <g class="form f66 path p66 p66_13">\
                    <path class="st0" d="M32,160L32,160v-16H16C16,152.8,23.2,160,32,160z"/>\
                </g>\
                <g class="form f66 path p66 p66_14">\
                    <path class="st0" d="M32,160v-16v-8c0,4.4,3.6,8,8,8l0,0h8v16H32z"/>\
                </g>\
                <g class="form f66 path p66 p66_15">\
                    <path class="st0" d="M144,160v-16v-8c0,4.4-3.6,8-8,8l0,0h-8v16H144z"/>\
                </g>\
                <g class="form f66 path p66 p66_16">\
                    <path class="st0" d="M144,160L144,160v-16h16C160,152.8,152.8,160,144,160z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 67 ICON 03 --------------- */
dana_char['d67'] = $('\
    <div class="icon c_67">\
        <div class="icon_03 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_67">\
                <g class="form f67 square s67 s67_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_08">\
                    <rect y="16" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_10">\
                    <rect y="32" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_11">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_12">\
                    <rect y="48" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_13">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_14">\
                    <rect y="64" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_15">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_16">\
                    <rect x="32" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_17">\
                    <rect x="48" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_18">\
                    <rect x="64" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_19">\
                    <rect x="80" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_20">\
                    <rect x="96" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_21">\
                    <rect x="112" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f67 square s67 s67_22">\
                    <rect x="128" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f67 path p67 p67_01">\
                    <path d="M16,0L16,0v16H0C0,7.2,7.2,0,16,0z"/>\
                </g>\
                <g class="form f67 path p67 p67_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8l0,0h8V0H16z"/>\
                </g>\
                <g class="form f67 path p67 p67_03">\
                    <path d="M160,0v16v8c0-4.4-3.6-8-8-8l0,0h-8V0H160z"/>\
                </g>\
                <g class="form f67 path p67 p67_04">\
                    <path d="M160,0L160,0v16h16C176,7.2,168.8,0,160,0z"/>\
                </g>\
                <g class="form f67 circle c67 c67_05">\
                    <circle cx="48" cy="64" r="10.5"/>\
                </g>\
                <g class="form f67 circle c67 c67_06">\
                    <circle cx="128" cy="64" r="10.5"/>\
                </g>\
                <g class="form f67 path p67 p67_07">\
                    <path d="M16,96L16,96V80H0C0,88.8,7.2,96,16,96z"/>\
                </g>\
                <g class="form f67 path p67 p67_08">\
                    <path d="M16,96V80v-8c0,4.4,3.6,8,8,8l0,0h8v16H16z"/>\
                </g>\
                <g class="form f67 path p67 p67_09">\
                    <path d="M160,96V80v-8c0,4.4-3.6,8-8,8l0,0h-8v16H160z"/>\
                </g>\
                <g class="form f67 path p67 p67_10">\
                    <path d="M160,96L160,96V80h16C176,88.8,168.8,96,160,96z"/>\
                </g>\
                <g class="form f67 path p67 p67_11">\
                    <path d="M16,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H16V104z"/>\
                </g>\
                <g class="form f67 path p67 p67_12">\
                    <path d="M48,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H48V104z"/>\
                </g>\
                <g class="form f67 path p67 p67_13">\
                    <path d="M80,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H80V104z"/>\
                </g>\
                <g class="form f67 path p67 p67_14">\
                    <path d="M112,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104z"/>\
                </g>\
                <g class="form f67 path p67 p67_15">\
                    <path d="M144,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 68 ICON 04 --------------- */
dana_char['d68'] = $('\
    <div class="icon c_68">\
        <div class="icon_04 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_68">\
                <g class="form f68 square s68 s68_01">\
                    <rect x="32" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_02">\
                    <rect x="48" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_03">\
                    <rect x="64" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_04">\
                    <rect x="80" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_05">\
                    <rect x="96" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_06">\
                    <rect x="112" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_07">\
                    <rect x="128" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_08">\
                    <rect x="0" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_09">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_10">\
                    <rect x="0" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_11">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_12">\
                    <rect x="0" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_13">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_14">\
                    <rect x="32" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_15">\
                    <rect x="48" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_16">\
                    <rect x="64" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_17">\
                    <rect x="80" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_18">\
                    <rect x="96" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_19">\
                    <rect x="112" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f68 square s68 s68_20">\
                    <rect x="128" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f68 path p68 p68_01">\
                    <path d="M31.9,8c0-4.4-3.6-8-8-8s-8,3.6-8,8v8h16V8z"/>\
                </g>\
                <g class="form f68 path p68 p68_02">\
                    <path d="M63.9,8c0-4.4-3.6-8-8-8s-8,3.6-8,8v8h16V8z"/>\
                </g>\
                <g class="form f68 path p68 p68_03">\
                    <path d="M95.9,8c0-4.4-3.6-8-8-8s-8,3.6-8,8v8h16V8z"/>\
                </g>\
                <g class="form f68 path p68 p68_04">\
                    <path d="M127.9,8c0-4.4-3.6-8-8-8s-8,3.6-8,8v8h16V8z"/>\
                </g>\
                <g class="form f68 path p68 p68_05">\
                    <path d="M159.9,8c0-4.4-3.6-8-8-8s-8,3.6-8,8v8h16V8z"/>\
                </g>\
                <g class="form f68 path p68 p68_06">\
                    <path d="M16,16L16,16l0,16H0C0,23.2,7.2,16,16,16z"/>\
                </g>\
                <g class="form f68 path p68 p68_07">\
                    <path d="M16,16v16v8c0-4.4,3.6-8,8-8v0h8V16H16z"/>\
                </g>\
                <g class="form f68 path p68 p68_08">\
                    <path d="M160,16v16v8c0-4.4-3.6-8-8-8v0h-8V16H160z"/>\
                </g>\
                <g class="form f68 path p68 p68_09">\
                    <path d="M160,16L160,16l0,16h16C176,23.2,168.8,16,160,16z"/>\
                </g>\
                <g class="form f68 circle c68 c68_10">\
                    <circle cx="48.4" cy="64" r="10.5"/>\
                </g>\
                <g class="form f68 circle c68 c68_11">\
                    <circle cx="128.4" cy="64" r="10.5"/>\
                </g>\
                <g class="form f68 path p68 p68_12">\
                    <path d="M16,96L16,96l0-16H0C0,88.8,7.2,96,16,96z"/>\
                </g>\
                <g class="form f68 path p68 p68_13">\
                    <path d="M16,96V80v-8c0,4.4,3.6,8,8,8v0h8v16H16z"/>\
                </g>\
                <g class="form f68 path p68 p68_14">\
                    <path d="M160,96V80v-8c0,4.4-3.6,8-8,8v0h-8v16H160z"/>\
                </g>\
                <g class="form f68 path p68 p68_15">\
                    <path d="M160,96L160,96l0-16h16C176,88.8,168.8,96,160,96z"/>\
                </g>\
                <g class="form f68 path p68 p68_16">\
                    <path d="M15.9,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104z"/>\
                </g>\
                <g class="form f68 path p68 p68_17">\
                    <path d="M47.9,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104z"/>\
                </g>\
                <g class="form f68 path p68 p68_18">\
                    <path d="M79.9,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104z"/>\
                </g>\
                <g class="form f68 path p68 p68_19">\
                    <path d="M111.9,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104z"/>\
                </g>\
                <g class="form f68 path p68 p68_20">\
                    <path d="M143.9,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 69 ICON 05 --------------- */
dana_char['d69'] = $('\
    <div class="icon c_69">\
        <div class="icon_05 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_69">\
                <g class="form f69 square s69 s69_01">\
                    <rect x="32" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_02">\
                    <rect x="48" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_03">\
                    <rect x="64" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_04">\
                    <rect x="80" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_05">\
                    <rect x="96" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_06">\
                    <rect x="112" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_07">\
                    <rect x="128" y="0" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_08">\
                    <rect y="16" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_09">\
                    <rect x="160" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_10">\
                    <rect y="32" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_11">\
                    <rect x="160" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_12">\
                    <rect x="32" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_13">\
                    <rect x="48" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_14">\
                    <rect x="64" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_15">\
                    <rect x="80" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_16">\
                    <rect x="96" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_17">\
                    <rect x="112" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_18">\
                    <rect x="128" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_19">\
                    <rect x="16" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_20">\
                    <rect x="48" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_21">\
                    <rect x="80" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_22">\
                    <rect x="112" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_23">\
                    <rect x="144" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_24">\
                    <rect x="16" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_25">\
                    <rect x="48" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_26">\
                    <rect x="80" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_27">\
                    <rect x="112" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f69 square s69 s69_28">\
                    <rect x="144" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f69 path p69 p69_01">\
                    <path d="M16,0L16,0v16H0C0,7.2,7.2,0,16,0z"/>\
                </g>\
                <g class="form f69 path p69 p69_02">\
                    <path d="M16,0v16v8c0-4.4,3.6-8,8-8l0,0h8V0H16z"/>\
                </g>\
                <g class="form f69 path p69 p69_03">\
                    <path d="M160,0v16v8c0-4.4-3.6-8-8-8l0,0h-8V0H160z"/>\
                </g>\
                <g class="form f69 path p69 p69_04">\
                    <path d="M160,0L160,0v16h16C176,7.2,168.8,0,160,0z"/>\
                </g>\
                <g class="form f69 circle c69 c69_05">\
                    <circle cx="47.9" cy="32" r="10.5"/>\
                </g>\
                <g class="form f69 circle c69 c69_06">\
                    <circle cx="127.9" cy="32" r="10.5"/>\
                </g>\
                <g class="form f69 path p69 p69_07">\
                    <path d="M16,64L16,64V48H0C0,56.8,7.2,64,16,64z"/>\
                </g>\
                <g class="form f69 path p69 p69_08">\
                    <path d="M16,64V48v-8c0,4.4,3.6,8,8,8l0,0h8v16H16z"/>\
                </g>\
                <g class="form f69 path p69 p69_09">\
                    <path d="M160,64V48v-8c0,4.4-3.6,8-8,8l0,0h-8v16H160z"/>\
                </g>\
                <g class="form f69 path p69 p69_10">\
                    <path d="M160,64L160,64V48h16C176,56.8,168.8,64,160,64z"/>\
                </g>\
                <g class="form f69 path p69 p69_11">\
                    <path d="M15.9,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104z"/>\
                </g>\
                <g class="form f69 path p69 p69_12">\
                    <path d="M47.9,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104z"/>\
                </g>\
                <g class="form f69 path p69 p69_13">\
                    <path d="M79.9,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104z"/>\
                </g>\
                <g class="form f69 path p69 p69_14">\
                    <path d="M111.9,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104z"/>\
                </g>\
                <g class="form f69 path p69 p69_15">\
                    <path d="M143.9,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 70 ICON 06 --------------- */
dana_char['d70'] = $('\
    <div class="icon c_70">\
        <div class="icon_06 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_70">\
                <g class="form f70 square s70 s70_01">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f70 square s70 s70_02">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f70 square s70 s70_03">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f70 square s70 s70_04">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f70 square s70 s70_05">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f70 square s70 s70_06">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f70 square s70 s70_07">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f70 square s70 s70_08">\
                    <rect y="48" width="16" height="16"/>\
                </g>\
                <g class="form f70 square s70 s70_09">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f70 square s70 s70_10">\
                    <rect y="64" width="16" height="16"/>\
                </g>\
                <g class="form f70 square s70 s70_11">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f70 square s70 s70_12">\
                    <rect x="32" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f70 square s70 s70_13">\
                    <rect x="48" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f70 square s70 s70_14">\
                    <rect x="64" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f70 square s70 s70_15">\
                    <rect x="80" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f70 square s70 s70_16">\
                    <rect x="96" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f70 square s70 s70_17">\
                    <rect x="112" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f70 square s70 s70_18">\
                    <rect x="128" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f70 path p70 p70_01">\
                    <path d="M24,0c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V0H24z"/>\
                </g>\
                <g class="form f70 path p70 p70_02">\
                    <path d="M32,0c8.8,0,16,7.2,16,16H32V0L32,0z"/>\
                </g>\
                <g class="form f70 path p70 p70_03">\
                    <path d="M144,0c-8.8,0-16,7.2-16,16h16V0L144,0z"/>\
                </g>\
                <g class="form f70 path p70 p70_04">\
                    <path d="M152,16c4.4,0,8-3.6,8-8s-3.6-8-8-8h-8v16H152z"/>\
                </g>\
                <g class="form f70 path p70 p70_05">\
                    <path d="M48,16H32h-8c4.4,0,8,3.6,8,8l0,0v8h16V16z"/>\
                </g>\
                <g class="form f70 path p70 p70_06">\
                    <path d="M128,16h16h8c-4.4,0-8,3.6-8,8l0,0v8h-16V16z"/>\
                </g>\
                <g class="form f70 path p70 p70_07">\
                    <path d="M16,32L16,32v16H0C0,39.2,7.2,32,16,32z"/>\
                </g>\
                <g class="form f70 path p70 p70_08">\
                    <path d="M16,32v16v8c0-4.4,3.6-8,8-8l0,0h8V32H16z"/>\
                </g>\
                <g class="form f70 path p70 p70_09">\
                    <path d="M160,32v16v8c0-4.4-3.6-8-8-8l0,0h-8V32H160z"/>\
                </g>\
                <g class="form f70 path p70 p70_10">\
                    <path d="M160,32L160,32v16h16C176,39.2,168.8,32,160,32z"/>\
                </g>\
                <g class="form f70 circle c70 c70_11">\
                    <circle cx="48" cy="64" r="10.5"/>\
                </g>\
                <g class="form f70 circle c70 c70_12">\
                    <circle cx="128" cy="64" r="10.5"/>\
                </g>\
                <g class="form f70 path p70 p70_13">\
                    <path d="M16,96L16,96V80H0C0,88.8,7.2,96,16,96z"/>\
                </g>\
                <g class="form f70 path p70 p70_14">\
                    <path d="M16,96V80v-8c0,4.4,3.6,8,8,8l0,0h8v16H16z"/>\
                </g>\
                <g class="form f70 path p70 p70_15">\
                    <path d="M160,96V80v-8c0,4.4-3.6,8-8,8l0,0h-8v16H160z"/>\
                </g>\
                <g class="form f70 path p70 p70_16">\
                    <path d="M160,96L160,96V80h16C176,88.8,168.8,96,160,96z"/>\
                </g>\
                <g class="form f70 path p70 p70_17">\
                    <path d="M16,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H16V104z"/>\
                </g>\
                <g class="form f70 path p70 p70_18">\
                    <path d="M48,96L48,96h16v16C55.2,112,48,104.8,48,96z"/>\
                </g>\
                <g class="form f70 path p70 p70_19">\
                    <path d="M64,112L64,112V96h16C80,104.8,72.8,112,64,112z"/>\
                </g>\
                <g class="form f70 path p70 p70_20">\
                    <path d="M96,96L96,96h16v16C103.2,112,96,104.8,96,96z"/>\
                </g>\
                <g class="form f70 path p70 p70_21">\
                    <path d="M112,112L112,112V96h16C128,104.8,120.8,112,112,112z"/>\
                </g>\
                <g class="form f70 path p70 p70_22">\
                    <path d="M143.9,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 71 ICON 07 --------------- */
dana_char['d71'] = $('\
    <div class="icon c_71">\
        <div class="icon_07 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_71">\
                <g class="form f71 square s71 s71_01">\
                    <rect x="48" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_02">\
                    <rect x="112" y="16" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_03">\
                    <rect x="32" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_04">\
                    <rect x="48" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_05">\
                    <rect x="64" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_06">\
                    <rect x="80" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_07">\
                    <rect x="96" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_08">\
                    <rect x="112" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_09">\
                    <rect x="128" y="32" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_10">\
                    <rect y="48" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_11">\
                    <rect x="160" y="48" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_12">\
                    <rect y="64" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_13">\
                    <rect x="160" y="64" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_14">\
                    <rect x="32" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_15">\
                    <rect x="48" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_16">\
                    <rect x="64" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_17">\
                    <rect x="80" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_18">\
                    <rect x="96" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_19">\
                    <rect x="112" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f71 square s71 s71_20">\
                    <rect x="128" y="80" width="16" height="16"/>\
                </g>\
                <g class="form f71 path p71 p71_01">\
                    <path d="M24,0c-4.4,0-8,3.6-8,8s3.6,8,8,8h8V0H24z"/>\
                </g>\
                <g class="form f71 path p71 p71_02">\
                    <path d="M48,0v16v8c0-4.4-3.6-8-8-8l0,0h-8V0H48z"/>\
                </g>\
                <g class="form f71 path p71 p71_03">\
                    <path d="M48,0L48,0v16h16C64,7.2,56.8,0,48,0z"/>\
                </g>\
                <g class="form f71 path p71 p71_04">\
                    <path d="M128,0L128,0v16h-16C112,7.2,119.2,0,128,0z"/>\
                </g>\
                <g class="form f71 path p71 p71_05">\
                    <path d="M128,0v16v8c0-4.4,3.6-8,8-8l0,0h8V0H128z"/>\
                </g>\
                <g class="form f71 path p71 p71_06">\
                    <path d="M152,16c4.4,0,8-3.6,8-8s-3.6-8-8-8h-8v16H152z"/>\
                </g>\
                <g class="form f71 path p71 p71_07">\
                    <path d="M96,24c0-4.4-3.6-8-8-8s-8,3.6-8,8v8h16V24z"/>\
                </g>\
                <g class="form f71 path p71 p71_08">\
                    <path d="M16,32L16,32v16H0C0,39.2,7.2,32,16,32z"/>\
                </g>\
                <g class="form f71 path p71 p71_09">\
                    <path d="M16,32v16v8c0-4.4,3.6-8,8-8l0,0h8V32H16z"/>\
                </g>\
                <g class="form f71 path p71 p71_10">\
                    <path d="M160,32v16v8c0-4.4-3.6-8-8-8l0,0h-8V32H160z"/>\
                </g>\
                <g class="form f71 path p71 p71_11">\
                    <path d="M160,32L160,32v16h16C176,39.2,168.8,32,160,32z"/>\
                </g>\
                <g class="form f71 circle c71 c71_12">\
                    <circle cx="48" cy="64" r="10.5"/>\
                </g>\
                <g class="form f71 circle c71 c71_13">\
                    <circle cx="128" cy="64" r="10.5"/>\
                </g>\
                <g class="form f71 path p71 p71_14">\
                    <path d="M16,96L16,96V80H0C0,88.8,7.2,96,16,96z"/>\
                </g>\
                <g class="form f71 path p71 p71_15">\
                    <path d="M16,96V80v-8c0,4.4,3.6,8,8,8l0,0h8v16H16z"/>\
                </g>\
                <g class="form f71 path p71 p71_16">\
                    <path d="M160,96V80v-8c0,4.4-3.6,8-8,8l0,0h-8v16H160z"/>\
                </g>\
                <g class="form f71 path p71 p71_17">\
                    <path d="M160,96L160,96V80h16C176,88.8,168.8,96,160,96z"/>\
                </g>\
                <g class="form f71 path p71 p71_18">\
                    <path d="M16,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H16V104z"/>\
                </g>\
                <g class="form f71 path p71 p71_19">\
                    <path d="M64.1,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104z"/>\
                </g>\
                <g class="form f71 path p71 p71_20">\
                    <path d="M96,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H96V104z"/>\
                </g>\
                <g class="form f71 path p71 p71_21">\
                    <path d="M144,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 72 ICON 08 --------------- */
dana_char['d72'] = $('\
    <div class="icon c_72">\
        <div class="icon_08 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_72">\
                <g class="form f72 square s72 s72_01">\
                    <rect x="16.4" y="16.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_02">\
                    <rect x="32.4" y="16.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_03">\
                    <rect x="128.4" y="16.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_04">\
                    <rect x="144.4" y="16.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_05">\
                    <rect x="32.3" y="32.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_06">\
                    <rect x="48.3" y="32.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_07">\
                    <rect x="64.3" y="32.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_08">\
                    <rect x="80.3" y="32.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_09">\
                    <rect x="96.3" y="32.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_10">\
                    <rect x="112.3" y="32.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_11">\
                    <rect x="128.3" y="32.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_12">\
                    <rect x="0.3" y="48.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_13">\
                    <rect x="160.3" y="48.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_14">\
                    <rect x="0.3" y="64.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_15">\
                    <rect x="160.3" y="64.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_16">\
                    <rect x="32.3" y="80.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_17">\
                    <rect x="48.3" y="80.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_18">\
                    <rect x="64.3" y="80.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_19">\
                    <rect x="80.3" y="80.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_20">\
                    <rect x="96.3" y="80.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_21">\
                    <rect x="112.3" y="80.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 square s72 s72_22">\
                    <rect x="128.3" y="80.5" width="16" height="16"/>\
                </g>\
                <g class="form f72 path p72 p72_01">\
                    <path d="M16.3,16.5L16.3,16.5h16v-16C23.5,0.5,16.3,7.7,16.3,16.5z"/>\
                </g>\
                <g class="form f72 path p72 p72_02">\
                    <path d="M32.3,0.5L32.3,0.5v16h16C48.3,7.7,41.2,0.5,32.3,0.5z"/>\
                </g>\
                <g class="form f72 path p72 p72_03">\
                    <path d="M128.3,16.5L128.3,16.5h16v-16C135.5,0.5,128.3,7.7,128.3,16.5z"/>\
                </g>\
                <g class="form f72 path p72 p72_04">\
                    <path d="M144.3,0.5L144.3,0.5v16h16C160.3,7.7,153.2,0.5,144.3,0.5z"/>\
                </g>\
                <g class="form f72 path p72 p72_05">\
                    <path d="M16.3,32.5L16.3,32.5v16h-16C0.3,39.7,7.5,32.5,16.3,32.5z"/>\
                </g>\
                <g class="form f72 path p72 p72_06">\
                    <path d="M16.3,32.5v16v8c0-4.4,3.6-8,8-8l0,0h8v-16H16.3z"/>\
                </g>\
                <g class="form f72 path p72 p72_07">\
                    <path d="M160.3,32.5v16v8c0-4.4-3.6-8-8-8l0,0h-8v-16H160.3z"/>\
                </g>\
                <g class="form f72 path p72 p72_08">\
                    <path d="M160.3,32.5L160.3,32.5v16h16C176.3,39.7,169.2,32.5,160.3,32.5z"/>\
                </g>\
                <g class="form f72 circle c72 c72_09">\
                    <circle cx="48" cy="64" r="10.5"/>\
                </g>\
                <g class="form f72 circle c72 c72_10">\
                    <circle cx="128" cy="64" r="10.5"/>\
                </g>\
                <g class="form f72 path p72 p72_11">\
                    <path d="M16.3,96.5L16.3,96.5v-16h-16C0.3,89.3,7.5,96.5,16.3,96.5z"/>\
                </g>\
                <g class="form f72 path p72 p72_12">\
                    <path d="M16.3,96.5v-16v-8c0,4.4,3.6,8,8,8l0,0h8v16H16.3z"/>\
                </g>\
                <g class="form f72 path p72 p72_13">\
                    <path d="M160.3,96.5v-16v-8c0,4.4-3.6,8-8,8l0,0h-8v16H160.3z"/>\
                </g>\
                <g class="form f72 path p72 p72_14">\
                    <path d="M160.3,96.5L160.3,96.5v-16h16C176.3,89.3,169.2,96.5,160.3,96.5z"/>\
                </g>\
                <g class="form f72 path p72 p72_15">\
                    <path d="M16.3,104.5c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104.5z"/>\
                </g>\
                <g class="form f72 path p72 p72_16">\
                    <path d="M48.3,104.5c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16C48.3,96.5,48.3,104.5,48.3,104.5z"/>\
                </g>\
                <g class="form f72 path p72 p72_17">\
                    <path d="M80.3,104.5c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104.5z"/>\
                </g>\
                <g class="form f72 path p72 p72_18">\
                    <path d="M112.3,104.5c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104.5z"/>\
                </g>\
                <g class="form f72 path p72 p72_19">\
                    <path d="M144.3,104.5c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104.5z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 73 ICON 09 --------------- */
dana_char['d73'] = $('\
    <div class="icon c_73">\
        <div class="icon_09 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_73">\
                <g class="form f73 square s73 s73_01">\
                    <rect x="64" y="16" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f73 square s73 s73_02">\
                    <rect x="96" y="16" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f73 square s73 s73_03">\
                    <rect x="32" y="32" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f73 square s73 s73_04">\
                    <rect x="128" y="32" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f73 square s73 s73_05">\
                    <rect x="0" y="48" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f73 square s73 s73_06">\
                    <rect x="160" y="48" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f73 square s73 s73_07">\
                    <rect x="0" y="64" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f73 square s73 s73_08">\
                    <rect x="160" y="64" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f73 square s73 s73_09">\
                    <rect x="0" y="80" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f73 square s73 s73_10">\
                    <rect x="32" y="80" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f73 square s73 s73_11">\
                    <rect x="48" y="80" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f73 square s73 s73_12">\
                    <rect x="64" y="80" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f73 square s73 s73_13">\
                    <rect x="80" y="80" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f73 square s73 s73_14">\
                    <rect x="96" y="80" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f73 square s73 s73_15">\
                    <rect x="112" y="80" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f73 square s73 s73_16">\
                    <rect x="128" y="80" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f73 square s73 s73_17">\
                    <rect x="160" y="80" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f73 path p73 p73_01">\
                    <path class="st0" d="M80,0L80,0l0,16H64C64,7.2,71.2,0,80,0z"/>\
                </g>\
                <g class="form f73 path p73 p73_02">\
                    <path class="st0" d="M96,16V0H80v16v8c0-4.4,3.6-8,8-8l0,0c4.4,0,8,3.6,8,8h0L96,16L96,16z"/>\
                </g>\
                <g class="form f73 path p73 p73_03">\
                    <path class="st0" d="M96,0L96,0l0,16h16C112,7.2,104.8,0,96,0z"/>\
                </g>\
                <g class="form f73 path p73 p73_04">\
                    <path class="st0" d="M48,16L48,16l0,16H32C32,23.2,39.2,16,48,16z"/>\
                </g>\
                <g class="form f73 path p73 p73_05">\
                    <path class="st0" d="M48,16v16v8c0-4.4,3.6-8,8-8l0,0h8V16H48z"/>\
                </g>\
                <g class="form f73 path p73 p73_06">\
                    <path class="st0" d="M112,16v16h8l0,0c4.4,0,8,3.6,8,8v-8V16H112z"/>\
                </g>\
                <g class="form f73 path p73 p73_07">\
                    <path class="st0" d="M128,16L128,16l0,16h16C144,23.2,136.8,16,128,16z"/>\
                </g>\
                <g class="form f73 path p73 p73_08">\
                    <path class="st0" d="M16,32L16,32l0,16L0,48C0,39.2,7.2,32,16,32z"/>\
                </g>\
                <g class="form f73 path p73 p73_09">\
                    <path class="st0" d="M16,32v16v8c0-4.4,3.6-8,8-8l0,0h8V32H16z"/>\
                </g>\
                <g class="form f73 path p73 p73_10">\
                    <path class="st0" d="M144,32v16h8l0,0c4.4,0,8,3.6,8,8v-8V32H144z"/>\
                </g>\
                <g class="form f73 path p73 p73_11">\
                    <path class="st0" d="M160,32L160,32l0,16h16C176,39.2,168.8,32,160,32z"/>\
                </g>\
                <g class="form f73 circle c73 c73_12">\
                    <circle cx="48" cy="64" r="10.5"/>\
                </g>\
                <g class="form f73 circle c73 c73_13">\
                    <circle cx="128" cy="64" r="10.5"/>\
                </g>\
                <g class="form f73 path p73 p73_14">\
                    <path class="st0" d="M24,80L24,80c-4.4,0-8-3.6-8-8v8v16h16V80H24z"/>\
                </g>\
                <g class="form f73 path p73 p73_15">\
                    <path class="st0" d="M152,80L152,80h-8v16h16V80v-8C160,76.4,156.4,80,152,80z"/>\
                </g>\
                <g class="form f73 path p73 p73_16">\
                    <path d="M0,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H0V104z"/>\
                </g>\
                <g class="form f73 path p73 p73_17">\
                    <path d="M64,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H64V104z"/>\
                </g>\
                <g class="form f73 path p73 p73_18">\
                    <path d="M96,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8H96V104z"/>\
                </g>\
                <g class="form f73 path p73 p73_19">\
                    <path d="M160,104c0,4.4,3.6,8,8,8s8-3.6,8-8v-8h-16V104z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');

/* --------------- 74 ICON 10 --------------- */
dana_char['d74'] = $('\
    <div class="icon c_74">\
        <div class="icon_10 ascender">\
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="176.5px" height="192.5px" viewBox="0 0 176.5 192.5" enable-background="new 0 0 176.5 192.5" xml:space="preserve" id="dana_74">\
                <g class="form f74 square s74 s74_01">\
                    <rect x="80" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f74 square s74 s74_02">\
                    <rect x="32" y="32" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f74 square s74 s74_03">\
                    <rect x="128" y="32" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f74 square s74 s74_04">\
                    <rect x="0" y="48" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f74 square s74 s74_05">\
                    <rect x="160" y="48" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f74 square s74 s74_06">\
                    <rect x="0" y="64" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f74 square s74 s74_07">\
                    <rect x="160" y="64" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f74 square s74 s74_08">\
                    <rect x="0" y="80" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f74 square s74 s74_09">\
                    <rect x="160" y="80" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f74 square s74 s74_10">\
                    <rect x="32" y="96" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f74 square s74 s74_11">\
                    <rect x="80" y="96" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f74 square s74 s74_12">\
                    <rect x="128" y="96" class="st0" width="16" height="16"/>\
                </g>\
                <g class="form f74 path p74 p74_01">\
                    <path class="st0" d="M64,0L64,0l0,16H48C48,7.2,55.2,0,64,0z"/>\
                </g>\
                <g class="form f74 path p74 p74_02">\
                    <path class="st0" d="M64,0v16v8c0-4.4,3.6-8,8-8l0,0h8V0H64z"/>\
                </g>\
                <g class="form f74 path p74 p74_03">\
                    <path class="st0" d="M96,0v16h8l0,0c4.4,0,8,3.6,8,8v-8V0H96z"/>\
                </g>\
                <g class="form f74 path p74 p74_04">\
                    <path class="st0" d="M112,0L112,0l0,16h16C128,7.2,120.8,0,112,0z"/>\
                </g>\
                <g class="form f74 path p74 p74_05">\
                    <path class="st0" d="M48,16L48,16l0,16H32C32,23.2,39.2,16,48,16z"/>\
                </g>\
                <g class="form f74 path p74 p74_06">\
                    <path class="st0" d="M48,16v16v8c0-4.4,3.6-8,8-8l0,0h8V16H48z"/>\
                </g>\
                <g class="form f74 path p74 p74_07">\
                    <path class="st0" d="M112,16v16h8l0,0c4.4,0,8,3.6,8,8v-8V16H112z"/>\
                </g>\
                <g class="form f74 path p74 p74_08">\
                    <path class="st0" d="M128,16L128,16l0,16h16C144,23.2,136.8,16,128,16z"/>\
                </g>\
                <g class="form f74 path p74 p74_09">\
                    <path class="st0" d="M16,32L16,32l0,16H0C0,39.2,7.2,32,16,32z"/>\
                </g>\
                <g class="form f74 path p74 p74_10">\
                    <path class="st0" d="M16,32v16v8c0-4.4,3.6-8,8-8l0,0h8V32H16z"/>\
                </g>\
                <g class="form f74 path p74 p74_11">\
                    <path class="st0" d="M144,32v16h8l0,0c4.4,0,8,3.6,8,8v-8V32H144z"/>\
                </g>\
                <g class="form f74 path p74 p74_12">\
                    <path class="st0" d="M160,32L160,32l0,16h16C176,39.2,168.8,32,160,32z"/>\
                </g>\
                <g class="form f74 circle c74 c74_13">\
                    <circle cx="48" cy="80" r="10.5"/>\
                </g>\
                <g class="form f74 circle c74 c74_14">\
                    <circle cx="128" cy="80" r="10.5"/>\
                </g>\
                <g class="form f74 path p74 p74_15">\
                    <path class="st0" d="M0,96L0,96l16,0v16C7.2,112,0,104.8,0,96z"/>\
                </g>\
                <g class="form f74 path p74 p74_16">\
                    <path class="st0" d="M24,96L24,96c-4.4,0-8-3.6-8-8v8v16h16V96H24z"/>\
                </g>\
                <g class="form f74 path p74 p74_17">\
                    <path class="st0" d="M48,112L48,112l0-16h16C64,104.8,56.8,112,48,112z"/>\
                </g>\
                <g class="form f74 path p74 p74_18">\
                    <path class="st0" d="M64,96L64,96l16,0v16C71.2,112,64,104.8,64,96z"/>\
                </g>\
                <g class="form f74 path p74 p74_19">\
                    <path class="st0" d="M96,112L96,112l0-16h16C112,104.8,104.8,112,96,112z"/>\
                </g>\
                <g class="form f74 path p74 p74_20">\
                    <path class="st0" d="M112,96L112,96l16,0v16C119.2,112,112,104.8,112,96z"/>\
                </g>\
                <g class="form f74 path p74 p74_21">\
                    <path class="st0" d="M152,96L152,96h-8v16h16V96v-8C160,92.4,156.4,96,152,96z"/>\
                </g>\
                <g class="form f74 path p74 p74_22">\
                    <path class="st0" d="M160,112L160,112l0-16h16C176,104.8,168.8,112,160,112z"/>\
                </g>\
            </svg>\
        </div>\
    </div>\
');





dana_char.forEach(function(e, i, a) {
  dana.get_character(a[i], '.' + i);  
});



dana.get_character(dana_char['d32'], '.d32');
dana.get_character(dana_char['d33'], '.d33');
dana.get_character(dana_char['d34'], '.d34');
dana.get_character(dana_char['d35'], '.d35');
dana.get_character(dana_char['d36'], '.d36');
dana.get_character(dana_char['d37'], '.d37');
dana.get_character(dana_char['d38'], '.d38');
dana.get_character(dana_char['d39'], '.d39');
dana.get_character(dana_char['d40'], '.d40');
dana.get_character(dana_char['d41'], '.d41');
dana.get_character(dana_char['d42'], '.d42');
dana.get_character(dana_char['d43'], '.d43');
dana.get_character(dana_char['d44'], '.d44');
dana.get_character(dana_char['d45'], '.d45');
dana.get_character(dana_char['d46'], '.d46');
dana.get_character(dana_char['d47'], '.d47');
dana.get_character(dana_char['d48'], '.d48');
dana.get_character(dana_char['d49'], '.d49');
dana.get_character(dana_char['d50'], '.d50');
dana.get_character(dana_char['d51'], '.d51');
dana.get_character(dana_char['d52'], '.d52');
dana.get_character(dana_char['d53'], '.d53');
dana.get_character(dana_char['d54'], '.d54');
dana.get_character(dana_char['d55'], '.d55');
dana.get_character(dana_char['d56'], '.d56');
dana.get_character(dana_char['d57'], '.d57');
dana.get_character(dana_char['d48_1'], '.d48_1');
dana.get_character(dana_char['d49_1'], '.d49_1');
dana.get_character(dana_char['d50_1'], '.d50_1');
dana.get_character(dana_char['d51_1'], '.d51_1');
dana.get_character(dana_char['d52_1'], '.d52_1');
dana.get_character(dana_char['d53_1'], '.d53_1');
dana.get_character(dana_char['d54_1'], '.d54_1');
dana.get_character(dana_char['d55_1'], '.d55_1');
dana.get_character(dana_char['d56_1'], '.d56_1');
dana.get_character(dana_char['d57_1'], '.d57_1');
dana.get_character(dana_char['d48_2'], '.d48_2');
dana.get_character(dana_char['d49_2'], '.d49_2');
dana.get_character(dana_char['d50_2'], '.d50_2');
dana.get_character(dana_char['d51_2'], '.d51_2');
dana.get_character(dana_char['d52_2'], '.d52_2');
dana.get_character(dana_char['d53_2'], '.d53_2');
dana.get_character(dana_char['d54_2'], '.d54_2');
dana.get_character(dana_char['d55_2'], '.d55_2');
dana.get_character(dana_char['d56_2'], '.d56_2');
dana.get_character(dana_char['d57_2'], '.d57_2');
dana.get_character(dana_char['d58'], '.d58');
dana.get_character(dana_char['d59'], '.d59');
dana.get_character(dana_char['d60'], '.d60');
dana.get_character(dana_char['d61'], '.d61');
dana.get_character(dana_char['d62'], '.d62');
dana.get_character(dana_char['d63'], '.d63');
dana.get_character(dana_char['d64'], '.d64');
dana.get_character(dana_char['d65'], '.d65');
dana.get_character(dana_char['d66'], '.d66');
dana.get_character(dana_char['d67'], '.d67');
dana.get_character(dana_char['d68'], '.d68');
dana.get_character(dana_char['d69'], '.d69');
dana.get_character(dana_char['d70'], '.d70');
dana.get_character(dana_char['d71'], '.d71');
dana.get_character(dana_char['d72'], '.d72');
dana.get_character(dana_char['d73'], '.d73');
dana.get_character(dana_char['d74'], '.d74');
dana.get_character(dana_char['d91'], '.d91');
dana.get_character(dana_char['d92'], '.d92');
dana.get_character(dana_char['d93'], '.d93');
dana.get_character(dana_char['d95'], '.d95');
dana.get_character(dana_char['d97'], '.d97');
dana.get_character(dana_char['d98'], '.d98');
dana.get_character(dana_char['d99'], '.d99');
dana.get_character(dana_char['d100'], '.d100');
dana.get_character(dana_char['d101'], '.d101');
dana.get_character(dana_char['d102'], '.d102');
dana.get_character(dana_char['d103'], '.d103');
dana.get_character(dana_char['d104'], '.d104');
dana.get_character(dana_char['d105'], '.d105');
dana.get_character(dana_char['d106'], '.d106');
dana.get_character(dana_char['d107'], '.d107');
dana.get_character(dana_char['d108'], '.d108');
dana.get_character(dana_char['d109'], '.d109');
dana.get_character(dana_char['d110'], '.d110');
dana.get_character(dana_char['d111'], '.d111');
dana.get_character(dana_char['d112'], '.d112');
dana.get_character(dana_char['d113'], '.d113');
dana.get_character(dana_char['d114'], '.d114');
dana.get_character(dana_char['d115'], '.d115');
dana.get_character(dana_char['d116'], '.d116');
dana.get_character(dana_char['d117'], '.d117');
dana.get_character(dana_char['d118'], '.d118');
dana.get_character(dana_char['d119'], '.d119');
dana.get_character(dana_char['d120'], '.d120');
dana.get_character(dana_char['d121'], '.d121');
dana.get_character(dana_char['d122'], '.d122');
dana.get_character(dana_char['d123'], '.d123');
dana.get_character(dana_char['d124'], '.d124');
dana.get_character(dana_char['d125'], '.d125');
dana.get_character(dana_char['d126'], '.d126');
dana.get_character(dana_char['d128'], '.d128');
dana.get_character(dana_char['d133'], '.d133');
dana.get_character(dana_char['d145'], '.d145');
dana.get_character(dana_char['d146'], '.d146');
dana.get_character(dana_char['d147'], '.d147');
dana.get_character(dana_char['d148'], '.d148');
dana.get_character(dana_char['d161'], '.d161');
dana.get_character(dana_char['d163'], '.d163');
dana.get_character(dana_char['d169'], '.d169');
dana.get_character(dana_char['d191'], '.d191');
dana.get_character(dana_char['d241'], '.d241');
dana.get_character(dana_char['d225'], '.d225');
dana.get_character(dana_char['d233'], '.d233');
dana.get_character(dana_char['d237'], '.d237');
dana.get_character(dana_char['d243'], '.d243');
dana.get_character(dana_char['d250'], '.d250');
dana.get_character(dana_char['d252'], '.d252');















