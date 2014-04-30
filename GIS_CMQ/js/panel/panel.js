var parentAccordion = new TINY.accordion.slider("parentAccordion");
parentAccordion.init("acc", "h3", 0, 0, "acc-selected");

var nestedAccordion = new TINY.accordion.slider("nestedAccordion");
nestedAccordion.init("nested", "h3", 0, -1, "acc-selected");