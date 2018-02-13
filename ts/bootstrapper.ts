/// <reference path="vendingMachine.ts" />

const machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
