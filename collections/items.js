import Item from "../classes/Item.js";
import tiers from "./tiers.js";

export const items = {
    item_bone: new Item("Kość", tiers.F, "Fragment większej, makabrycznej układanki, której nie da się już złożyć w całość."),
    item_skull: new Item("Czaszka", tiers.F, "Ten dostojny jegomość problemy natury egzystencjalnej ma dawno za sobą. I raczej nie podzieli się odpowiedzią. Wątpię by nam się spodobała. "),
    item_rottenthumb: new Item("Przegnity kciuk", tiers.F, "W niektórych kulturach to symbol szczęścia, trzymany na szyi by odstraszać złe duchy. U nas oznacza tylko ryzyko zakażenia. "),
    item_coffinplanks: new Item("Deski z trumny", tiers.F, "Czasami od strony trumny słychać ledwo słyszalne stukanie. Tych staram się nie otwierać. "),
    item_deadflower: new Item("Martwy kwiat", tiers.F, "Symbolicznie gnije razem z właścicielem."),
    item_brokenchalice: new Item("Rozbity kielich", tiers.F, "Poprzedni kapłan wypił duszkiem zawartość, połykając swoje grzechy, zanim przyszli po niego w nocy."),
    item_woolpatches: new Item("Wełniane łaty", tiers.F, "Fragmenty ubrania jakiegoś biedaka. Sam nie wiem po co to ze sobą trzymam. "),
    item_poganstatue: new Item("Pogańska Figurka", tiers.F, "Kiedyś te ziemie zamieszkiwał inny lud, czczący święte drzewo i oddający hołd ogniowi. Obie te rzeczy wykorzystano przeciw nim."),
    item_weirdstone: new Item("Kamienny rylec", tiers.F, "Gdy niechcąco przebiłem się przez trumnę, deski odsłoniły ten dziwaczny kawałek kamulca. Kiedyś można było znaleźć je częściej, ale ślady po ich istnieniu zatarto nadwyczaj dobrze."),
}