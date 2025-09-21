REPORT zbeispiel_intern_table.

TYPES: BEGIN OF ty_mitarbeiter,
         id    TYPE i,
         name  TYPE string,
         ort   TYPE string,
       END OF ty_mitarbeiter.

DATA: lt_mitarbeiter TYPE TABLE OF ty_mitarbeiter,
      ls_mitarbeiter TYPE ty_mitarbeiter.

* Einträge hinzufügen
ls_mitarbeiter-id = 1.
ls_mitarbeiter-name = 'Anna'.
ls_mitarbeiter-ort = 'Berlin'.
APPEND ls_mitarbeiter TO lt_mitarbeiter.

ls_mitarbeiter-id = 2.
ls_mitarbeiter-name = 'Ben'.
ls_mitarbeiter-ort = 'München'.
APPEND ls_mitarbeiter TO lt_mitarbeiter.

ls_mitarbeiter-id = 3.
ls_mitarbeiter-name = 'Clara'.
ls_mitarbeiter-ort = 'Hamburg'.
APPEND ls_mitarbeiter TO lt_mitarbeiter.

* Ausgabe
LOOP AT lt_mitarbeiter INTO ls_mitarbeiter.
  WRITE: / 'ID:', ls_mitarbeiter-id,
           'Name:', ls_mitarbeiter-name,
           'Ort:', ls_mitarbeiter-ort.
ENDLOOP.

REPORT zflugdaten.

TABLES: sflight.

SELECT-OPTIONS: s_carrid FOR sflight-carrid.

DATA: lt_sflight TYPE TABLE OF sflight,
      ls_sflight TYPE sflight.

START-OF-SELECTION.
  SELECT * FROM sflight
    INTO TABLE @lt_sflight
    WHERE carrid IN @s_carrid.

  LOOP AT lt_sflight INTO ls_sflight.
    WRITE: / ls_sflight-carrid,
            ls_sflight-connid,
            ls_sflight-fldate,
            ls_sflight-price.
  ENDLOOP.

CALL FUNCTION 'Z_CHECK_EXIT'
  EXPORTING
    EXITNUM               = '85'
    ARGUMENT              = VBAK-VKORG
  EXCEPTIONS
    NOT_FOUND_OR_INACTIVE = 1
    OTHERS                = 2.
