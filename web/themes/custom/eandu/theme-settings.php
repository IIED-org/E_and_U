<?php

/**
 * @file
 * Functions to support Olivero theme settings.
 */
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Theme\ThemeSettings;
use Drupal\system\Form\ThemeSettingsForm;
use Drupal\Core\Form;

/**
 * Implements hook_form_FORM_ID_alter() for system_theme_settings.
 */
function eandu_form_system_theme_settings_alter(&$form, FormStateInterface $form_state): void {
 
  $form['olivero_settings']['olivero_utilities']['mobile_menu_all_widths'] = [
    '#type' => 'checkbox',
    '#title' => t('Enable mobile menu at all widths'),
    '#config_target' => 'eandu.settings:mobile_menu_all_widths',
    '#description' => t('Enables the mobile menu toggle at all widths.'),
  ];
}