import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import BasePage from './BasePage';
import RegisterElements from '../elements/RegisterElements';

export default class RegisterPage extends BasePage {
  readonly registerElements: RegisterElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.registerElements = new RegisterElements(page);
  }

  async preencherFormulario(): Promise<void> {
    await this.registerElements
      .getCampoPrimeiroNome()
      .fill(faker.person.firstName());
    await this.registerElements
      .getCampoSegundoNome()
      .fill(faker.person.lastName());

    await this.registerElements.getCountrySelect().selectOption('Brazil +55');
    await this.registerElements.getCampoTel().fill('48991756820');
    await this.registerElements.getBusinessName().fill('Teste');
    await this.registerElements.getCampoEmail().fill(`aaaaa@gmail.com`);
    const numb1 =
      (await this.registerElements.getCampoNumb1().textContent()) || '0';
    const numb2 =
      (await this.registerElements.getCampoNumb2().textContent()) || '0';

    const resultado = (parseFloat(numb1) || 0) + (parseFloat(numb2) || 0);

    await this.registerElements.getCampoResultado().fill(resultado.toString());
    await this.registerElements.getBotaoNovoCadastro().click();

    await expect(this.registerElements.getCorrectResult()).toBeVisible();
  }

  async preencherFormularioComEmailInvalido(): Promise<void> {
    await this.registerElements
      .getCampoPrimeiroNome()
      .fill(faker.person.firstName());
    await this.registerElements
      .getCampoSegundoNome()
      .fill(faker.person.lastName());
    await this.registerElements.getCampoTel().fill('48 999998888');
    await this.registerElements.getBusinessName().fill('Teste');
    await this.registerElements.getCampoEmail().fill('a@b.com.br');
    const numb1 =
      (await this.registerElements.getCampoNumb1().textContent()) || '0';
    const numb2 =
      (await this.registerElements.getCampoNumb2().textContent()) || '0';

    const resultado = (parseFloat(numb1) || 0) + (parseFloat(numb2) || 0);

    await this.registerElements.getCampoResultado().fill(resultado.toString());
    await this.registerElements.getBotaoNovoCadastro().click();
    await expect(this.registerElements.getEmailIncorrectResult()).toBeVisible();
  }

  async preencherFormularioComTelefoneInvalido(): Promise<void> {
    await this.registerElements
      .getCampoPrimeiroNome()
      .fill(faker.person.firstName());
    await this.registerElements
      .getCampoSegundoNome()
      .fill(faker.person.lastName());
    await this.registerElements.getCampoTel().fill('teste do kaua');
    await this.registerElements.getBusinessName().fill('Teste');
    await this.registerElements.getCampoEmail().fill('kaualibrelato@gmail.com');

    const numb1 =
      (await this.registerElements.getCampoNumb1().textContent()) || '0';
    const numb2 =
      (await this.registerElements.getCampoNumb2().textContent()) || '0';
    const resultado = (parseFloat(numb1) || 0) + (parseFloat(numb2) || 0);
    await this.registerElements.getCampoResultado().fill(resultado.toString());
    await this.registerElements.getBotaoNovoCadastro().click();

    await expect(
      this.registerElements.getTelefoneIncorrectResult()
    ).toBeVisible();
  }
}
