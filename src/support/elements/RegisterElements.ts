import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class RegisterElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getBotaoNovoCadastro(): Locator {
    return this.page.locator('#demo');
  }

  getCampoPrimeiroNome(): Locator {
    return this.page.locator('input[name="first_name"]');
  }

  getCampoSegundoNome(): Locator {
    return this.page.locator('input[name="last_name"]');
  }

  getCampoTel(): Locator {
    return this.page.locator('input[name="whatsapp"]');
  }

  getBusinessName(): Locator {
    return this.page.locator('input[name="business_name"]');
  }

  getCampoEmail(): Locator {
    return this.page.locator('input[placeholder="Email"]');
  }

  getCampoNumb1(): Locator {
    return this.page.locator('#numb1');
  }

  getCampoNumb2(): Locator {
    return this.page.locator('#numb2');
  }

  getCampoResultado(): Locator {
    return this.page.locator('input[placeholder="Result ?"]');
  }

  getCorrectResult(): Locator {
    return this.page.locator('text=Thank You!');
  }

  getEmailIncorrectResult(): Locator {
    return this.page.locator(
      'text=Email address is not valid. please use real email address'
    );
  }

  getTelefoneIncorrectResult(): Locator {
    return this.page.locator(
      'text=The whatsapp number is not valid. avoid adding country number, Zero or + signs before the number'
    );
  }

  getCountrySelect(): Locator {
    return this.page.locator('#country_id');
  }

  getMessageOK(): Locator {
    return this.page.locator(
      'text=We have sent your demo credentials to your email please check your mailbox. if demo credentials not found inbox please check spam folder'
    );
  }
}
